import QuestionsEditPage from './QuestionsEditPage';

export async function generateStaticParams() {
  return [{ id: 'board-self-evaluation-2026' }];
}

export default async function SurveyQuestionsEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <QuestionsEditPage surveyId={id} />;
}
