import PageContainer from '@/components/dashboard/page-container';
import PageHeader from '@/components/dashboard/page-header';
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
            <PageHeader title = {tool.title} description = {tool.description}/>
                テストやってます。
        </PageContainer>
    )
}

export default ToolPage