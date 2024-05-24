import React from 'react'
import CardDetails from '@/components/Card/CardDetails'

const page = () => {
  return (
    <div>
    <div className="md:flex gap-4 mt-4 ml-4">
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
    <div className="flex flex-col md:gap-4 md:flex-row md:mt-4 md:ml-4 mb-4">
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
    </div>
  )
}

export default page