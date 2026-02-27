import { useState } from "react"

export default function Forms() {
  const [email, setEmail] = useState("")
  const [comments, setComments] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, comments })
    alert("Thanks for subscribing!")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-md mx-auto bg-[#f8f7d4] p-6 rounded-lg"
    >
      <h2 className="text-2xl text-center font-bold mb-4">Find out about our new releases</h2>
      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-md p-2 mb-4"
        placeholder="your@email.com"
        required
      />
      <label className="block mb-2 font-medium">Leave a message</label>
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        className="w-full border rounded-md p-2 mb-4 h-28"
        placeholder="Write your comments here"
        required
      />

      <button
        type="submit"
        className="w-full bg-[#a2d170] py-2 rounded-lg hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  )
}