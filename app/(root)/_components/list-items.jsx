import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ListItems({ items }) {
  const avatarPaths = ["01.png", "02.png", "03.png", "04.png", "05.png"];

  return (
    <div className="space-y-8">
      {items?.map((item, index) => {
        const avatarPath =
          avatarPaths[Math.floor(Math.random() * avatarPaths.length)];
        return (
          <div key={index} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={`/avatars/${avatarPath}`} alt="Avatar" />
              <AvatarFallback>
                {item.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
