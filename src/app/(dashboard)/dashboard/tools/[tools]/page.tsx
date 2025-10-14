import { tools } from '@/config/tools'

const ToolPage = async ({ params }: {params:Promise<{ tool:string }>}) => {
    const toolType = (await params).tools as ToolType
    const tool = tools[toolType];

    //toolがない時はnot foundページを表示
    if(!tool){
        notFound()
    }

    return (
        <div>
            <h1>{tool.title}</h1>
        </div>
    )
}

export default ToolPage