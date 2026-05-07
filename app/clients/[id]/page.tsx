import ClientDetail from "./ClientDetail";

export async function generateStaticParams() {
  return [
    { id: "nordea-bank" },
    { id: "allianz-group" },
    { id: "loreal" },
    { id: "siemens-ag" },
    { id: "axa-insurance" },
    { id: "unilever" },
    { id: "roche-holding" },
    { id: "swiss-re" },
    { id: "banco-santander" },
    { id: "saudi-aramco" },
  ];
}

export default async function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ClientDetail clientId={id} />;
}
