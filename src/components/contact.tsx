type LinkProp = {
  url: string
}

const Link = ({ url }: LinkProp) => {
  return (
    <span className="inline-block text-2xl uppercase cursor-pointer link-hover-animation">
      {url}
    </span>
  )
}

const Contact = () => {
  return (
    <section className="mx-40 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">
        I am available now to work on project
      </h1>
      <div className="h-10"></div>
      <h1 className="text-6xl leading-snug uppercase font-medium cursor-pointer link-hover-animation">
        Send me an email
      </h1>
      <div className="h-40"></div>
      <span className="flex flex-row items-start space-x-10">
        <Link url="dribble" />
        <Link url="instagram" />
        <Link url="twitter" />
        <Link url="linkedin" />
      </span>
    </section>
  )
}

export default Contact
