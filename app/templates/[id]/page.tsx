import TemplateDetail from './TemplateDetail';

export async function generateStaticParams() {
  return [
    { id: 'board-self-evaluation' },
    { id: 'committee-self-evaluation' },
    { id: 'director-contribution' },
    { id: 'director-skills' },
    { id: 'skills-matrix-refresh' },
    { id: 'training-needs' },
    { id: 'c-suite-evaluation' },
    { id: 'director-suitability' },
  ];
}

export default async function TemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <TemplateDetail templateId={id} />;
}
