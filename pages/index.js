import Link from 'next/link';
export default function Index(){ 
  return ( <div>
                {/* client side render with Link tag */}
                <Link href="/about" title="about page">
                    <a>About Page</a>
                </Link>
                <p>Hello Next.js</p>
            </div>
        );

}

  