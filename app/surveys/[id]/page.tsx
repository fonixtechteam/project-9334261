import SurveyDetail from './SurveyDetail';

export async function generateStaticParams() {
  return [
    { id: 'board-self-evaluation-2026' },
  ];
}

export default async function SurveyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <SurveyDetail surveyId={id} />;
}
