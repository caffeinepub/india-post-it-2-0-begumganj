import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SchemeData } from '@/data/schemes';
import { LiveCalculator } from '../calculator/LiveCalculator';

interface SchemeTabsProps {
  scheme: SchemeData;
}

export function SchemeTabs({ scheme }: SchemeTabsProps) {
  return (
    <Tabs defaultValue="history" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-matte-black/30 p-1 rounded-md mb-6 border border-metallic-gold/20">
        <TabsTrigger 
          value="history"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all text-sm"
        >
          History
        </TabsTrigger>
        <TabsTrigger 
          value="eligibility"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all text-sm"
        >
          Eligibility
        </TabsTrigger>
        <TabsTrigger 
          value="benefits"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all text-sm"
        >
          Benefits
        </TabsTrigger>
        <TabsTrigger 
          value="documents"
          className="data-[state=active]:bg-metallic-gold data-[state=active]:text-matte-black data-[state=inactive]:text-official-primary font-semibold transition-all text-sm"
        >
          Documents
        </TabsTrigger>
      </TabsList>

      <TabsContent value="history" className="space-y-4">
        <div className="official-panel p-5">
          <h3 className="heading-md text-metallic-gold mb-3">Evolution & Purpose</h3>
          <p className="body-base text-official-primary leading-relaxed">{scheme.tabs.history}</p>
        </div>
      </TabsContent>

      <TabsContent value="eligibility" className="space-y-4">
        <div className="official-panel p-5">
          <h3 className="heading-md text-metallic-gold mb-3">Who Can Apply</h3>
          <p className="body-base text-official-primary leading-relaxed whitespace-pre-line">{scheme.tabs.eligibility}</p>
        </div>
      </TabsContent>

      <TabsContent value="benefits" className="space-y-4">
        <div className="official-panel p-5">
          <h3 className="heading-md text-metallic-gold mb-3">Returns & Advantages (2026)</h3>
          <p className="body-base text-official-primary leading-relaxed whitespace-pre-line">{scheme.tabs.benefits}</p>
        </div>
        
        {/* Live Calculator */}
        <div className="mt-5">
          <LiveCalculator scheme={scheme} />
        </div>
      </TabsContent>

      <TabsContent value="documents" className="space-y-4">
        <div className="official-panel p-5">
          <h3 className="heading-md text-metallic-gold mb-3">Required Documents</h3>
          <p className="body-base text-official-primary leading-relaxed whitespace-pre-line">{scheme.tabs.documents}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
