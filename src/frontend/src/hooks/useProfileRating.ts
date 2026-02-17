import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

/**
 * React Query hook for profile rating operations.
 * Fetches the last rating for a profile and submits new ratings (1-5).
 */
export function useProfileRating(username: string) {
  const { actor, isFetching: actorFetching } = useActor();
  const queryClient = useQueryClient();

  // Fetch the last rating for the profile
  const ratingQuery = useQuery({
    queryKey: ['profileRating', username],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      const rating = await actor.getRating(username);
      return rating;
    },
    enabled: !!actor && !actorFetching && !!username,
    retry: false,
  });

  // Submit a new rating
  const submitRatingMutation = useMutation({
    mutationFn: async (rating: number) => {
      if (!actor) throw new Error('Actor not available');
      if (rating < 1 || rating > 5) {
        throw new Error('Rating must be between 1 and 5');
      }
      await actor.submitRating(username, BigInt(rating));
    },
    onSuccess: () => {
      // Invalidate and refetch the rating
      queryClient.invalidateQueries({ queryKey: ['profileRating', username] });
    },
  });

  return {
    rating: ratingQuery.data,
    isLoading: actorFetching || ratingQuery.isLoading,
    isError: ratingQuery.isError,
    error: ratingQuery.error,
    submitRating: submitRatingMutation.mutate,
    isSubmitting: submitRatingMutation.isPending,
    submitError: submitRatingMutation.error,
  };
}
