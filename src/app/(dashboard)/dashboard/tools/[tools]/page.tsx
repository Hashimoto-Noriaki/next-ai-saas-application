import PageContainer from '@/components/dashboard/page-container';
import { tools } from '@/config/tools'
import { notFound } from 'next/navigation'

const ToolPage = async ({ params }: {params:Promise<{ tool:string }>}) => {
    const toolType = (await params).tools as ToolType
    const tool = tools[toolType];

    //toolがない時はnot foundページを表示
    if(!tool){
        notFound()
    }

    return (
        <PageContainer>
            <h1>{tool.title}</h1>
        </PageContainer>
    )
}

export default ToolPage