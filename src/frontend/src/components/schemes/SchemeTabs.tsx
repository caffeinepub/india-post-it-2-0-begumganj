import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SchemeData } from '@/data/schemes';
import { LiveCalculator } from '../calculator/LiveCalculator';

interface SchemeTabsProps {
  scheme: SchemeData;
}

export function SchemeTabs({ scheme }: SchemeTabsProps) {
  return (
    <Tabs defaultValue="history" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-matte-black/40 p-1.5 rounded-lg mb-8 border border-metallic-gold/20">
        <TabsTrigger 
          value="history"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all"
        >
          History
        </TabsTrigger>
        <TabsTrigger 
          value="eligibility"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all"
        >
          Eligibility
        </TabsTrigger>
        <TabsTrigger 
          value="benefits"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all"
        >
          Benefits
        </TabsTrigger>
        <TabsTrigger 
          value="documents"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all"
        >
          Documents
        </TabsTrigger>
      </TabsList>

      <TabsContent value="history" className="space-y-4">
        <div className="bg-matte-black/30 rounded-lg p-6 border border-metallic-gold/20">
          <h3 className="heading-md text-metallic-gold mb-4">Evolution & Purpose</h3>
          <p className="body-base text-official-primary leading-relaxed">{scheme.tabs.history}</p>
        </div>
      </TabsContent>

      <TabsContent value="eligibility" className="space-y-4">
        <div className="bg-matte-black/30 rounded-lg p-6 border border-metallic-gold/20">
          <h3 className="heading-md text-metallic-gold mb-4">Who Can Apply</h3>
          <p className="body-base text-official-primary leading-relaxed whitespace-pre-line">{scheme.tabs.eligibility}</p>
        </div>
      </TabsContent>

      <TabsContent value="benefits" className="space-y-4">
        <div className="bg-matte-black/30 rounded-lg p-6 border border-metallic-gold/20">
          <h3 className="heading-md text-metallic-gold mb-4">Returns & Advantages (2026)</h3>
          <p className="body-base text-official-primary leading-relaxed whitespace-pre-line">{scheme.tabs.benefits}</p>
        </div>
        
        {/* Live Calculator */}
        <div className="mt-6">
          <LiveCalculator scheme={scheme} />
        </div>
      </TabsContent>

      <TabsContent value="documents" className="space-y-4">
        <div className="bg-matte-black/30 rounded-lg p-6 border border-metallic-gold/20">
          <h3 className="heading-md text-metallic-gold mb-4">Required Documents</h3>
          <p className="body-base text-official-primary leading-relaxed whitespace-pre-line">{scheme.tabs.documents}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
