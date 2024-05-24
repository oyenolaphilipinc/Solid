import React from 'react'
import CardDetails from '@/components/Card/CardDetails'

const page = () => {
  return (
    <div>
    <div className="md:flex gap-2 mt-4">
        <CardDetails 
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
        />
        <CardDetails 
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
        />
        <CardDetails 
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
        />
    </div>
    <div className="flex flex-col md:gap-2 md:flex-row md:mt-4 mb-4">
        <div className="pb-2">
        <CardDetails 
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
        />
        </div>
        <div className="pb-2">
        <CardDetails 
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
        />
        </div>
        <div>
        <CardDetails 
            image="/images/blog/blog-01.png"
            alt="Just an Image"
            title="Go - Blockchain Saas Bolerplate and landing Page"
            details="Go is Saas Business boilerplate and starter kit template dpecifically crafted for SaaS businesses and startups..."
            href="/templates"
        />
        </div>
    </div>
    </div>
  )
}

export default page