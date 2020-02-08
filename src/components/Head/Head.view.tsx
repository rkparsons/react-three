import { Helmet } from 'react-helmet'
import React from 'react'

interface ViewProps {
    title: string
    description?: string
    image?: string
    url?: string
}

export default ({ title, description, image, url }: ViewProps) => {
    const seoTitle = `${title}`
    const seoDescription = description
    const seoImage = image

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="title" content={seoTitle} />
            <meta name="description" content={seoDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={seoImage} />
        </Helmet>
    )
}
