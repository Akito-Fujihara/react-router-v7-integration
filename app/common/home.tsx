import type { Route } from './+types/home';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Home' }, { name: 'description', content: 'Home' }];
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 rounded-lg border">
        <h1 className="mb-4 text-xl font-bold text-center">Home</h1>
        <div className="space-x-2 flex justify-center">
          <Link to="/account/login">
            <Button>ログイン</Button>
          </Link>
          <Link to="/account/signup">
            <Button>新規作成</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
