import { tools } from '@/config/tools'

const ToolPage = () => {
    const tool = tools["image-generator"];
    return (
        <div>
            <h1>{tool.title}</h1>
        </div>
    )
}

export default ToolPage