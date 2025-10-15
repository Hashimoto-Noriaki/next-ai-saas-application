"use client"

import { generateImage } from "@/actions/actions";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'

const initialState = {
    status:"idle"//idleとは待機中
}

export const ImageGenerator = () => {
    const [state,formAction] = useActionState(generateImage,initialState);
    return (
        <div className="space-y-6">
            <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="keyword">キーワード</Label>
                    <Input 
                        id="keyword"
                        name="keyword"
                        placeholder="作成したい画像のキーワードを入力(例:海、山、都会、自然)"
                        required
                    />
                </div>
                {/* submit button */}
                <Button>画像を生成する</Button>
            </form>
            { /* image preview */ }
            <div></div>
        </div>
    )
}

export default ImageGenerator