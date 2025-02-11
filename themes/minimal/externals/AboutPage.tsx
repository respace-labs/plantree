import { Site } from '@penxio/types'
import Image from '../components/Image'
import PageTitle from '../components/PageTitle'
import SocialIcon from '../components/social-icons'

interface Props {
  site: Site
  ContentRender: (props: { content: any[]; className?: string }) => JSX.Element
}

export function AboutPage({ site, ContentRender }: Props) {
  return (
    <>
      <div className="">
        <PageTitle>About</PageTitle>
        <div className="">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {site.logo && (
              <Image
                src={site.logo}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              {site.name}
            </h3>
            <div className="text-foreground/60">{site.description}</div>
            {/* <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div> */}
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 mx-auto lg:max-w-3xl">
            <ContentRender content={site.about} />
          </div>
        </div>
      </div>
    </>
  )
}
