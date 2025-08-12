import { notFound } from "next/navigation"
import { getServiceBySlug } from "../../../lib/services-data"
import ServicePageClient from "./service-page-client"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServicePageClient slug={slug} service={service} />
}
