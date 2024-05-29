import React from 'react'
import Card from '@/components/Card/CardDetails'

const page = () => {
  return (
    <>
    <div className="mt-16 text-2xl font-bold ml-6 text-gray-900">Free Templates</div>
    <div>
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-4">
        <Card
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
            className="mb-3 md:mb-0"
        />
        <Card 
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
            className="mb-3 md:mb-0"
        />
        <Card
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
            className="mb-3 md:mb-0"
        />
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-4">
        <Card
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
            className="mb-3 md:mb-0"
        />
        <Card
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
        />
        <Card
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
            className="mb-3 md:mb-0"
        />
    </div>
    </div>
    </>
  )
}

export default page