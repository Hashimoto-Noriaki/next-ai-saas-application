import { tools } from '@/config/tools'

const ToolPage = ({params}: {params:{tool:string}}) => {
    const toolType = params.tools
    const tool = tools[toolType];
    return (
        <div>
            <h1>{tool.title}</h1>
        </div>
    )
}

export default ToolPage