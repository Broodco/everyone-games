export default function Game({params} : {params: {slug: string}}) {
  return (
    <>
      <div>Game : {params.slug}</div>
    </>
  )
}