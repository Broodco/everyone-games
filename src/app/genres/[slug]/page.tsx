export default function Genre({params} : {params: {slug: string}}) {
  return (
    <>
      <div>Genre : {params.slug}</div>
    </>
  )
}