import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function App() {
  const [greeting, setGreeting] = useState('');
  const { data: count, refetch } = useQueryCall({
    functionName: 'get',
  });

  const { call: increment, loading } = useUpdateCall({
    functionName: 'inc',
    onSuccess: refetch,
  });

  const { call: greet } = useQueryCall({
    functionName: 'greet',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement;
    const greetingMessage = await greet([name.value]);
    setGreeting(greetingMessage as string);
  }

  return (
    <div className='px-4'>
      <Card>
        <CardContent>
          Ini kartu
        </CardContent>
      </Card>
      <h1>Vite + React + Motoko</h1>
      <div>
        <button onClick={increment} disabled={loading} className='cursor-pointer border border-gray-700'>
          Press
        </button>
        <span>count is {count?.toString() ?? 'loading...'}</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your Name:</label>
          <input id="name" type="text" className='border border-gray-700 rounded-md' />
          <button type="submit" className='border border-gray-700 rounded-md cursor-pointer'>Submit</button>
        </form>
        {greeting && <p>{greeting}</p>}
      </div>

      <Link to='/login'>
        <Button className='cursor-pointer'>
          Sign In
        </Button>
      </Link>
    </div>
  );
}

export default App;
