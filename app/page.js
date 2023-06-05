import Form from '@components/Form';
import Tracker from '@components/Tracker';

export default function Home() {

  return (
    <main className="w-full h-screen items-center flex justify-around flex-wrap">
      <Tracker
        title="Income"
      />

      <Form />

      <Tracker
        title="Expense"
      />
    </main>
  )
}
