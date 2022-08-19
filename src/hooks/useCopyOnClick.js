import { useState } from 'react'


export function useCopyOnClick(postId) {
    const [isCopied, setIsCopied] = useState(false)

    const copyLinkToClipboard = async (link) => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(link);
        } else {
            return document.execCommand('copy', true, link);
        }
    }

    const handleCopyClick = () => {
        const linkToPost = `${window.location.origin}/post/${postId}`
        copyLinkToClipboard(linkToPost)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false)
                }, 5000)
            })
            .catch(err => {
                console.log(err);
            })

    }

    return [isCopied, handleCopyClick]
}