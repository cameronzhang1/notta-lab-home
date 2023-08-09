import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./shadcn/card";
import { Button } from "./shadcn/button";
import Link from "next/link";
// TODO: rework to make card size responsive to column height
export default function Publication({ href, title, authors } : { href: string, title: string, authors: string }) {
  return (
      <Card className="object-cover transition duration-300 ease-in-out hover:shadow-2xl dark:hover:shadow-black/30">
        <CardHeader>
          <CardTitle>
            <Button variant="link" asChild>
              <Link
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {title}
              </Link>
            </Button>
          </CardTitle>
          <CardDescription className="text-right">
            {authors}
          </CardDescription>
        </CardHeader>
      </Card>
  );
}
