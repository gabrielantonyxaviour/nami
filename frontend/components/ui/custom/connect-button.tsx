import { Button } from "../button";

export default function ConnectButton({ login }: { login: () => void }) {
  return (
    <Button onClick={login} className="px-12">
      Connect Wallet
    </Button>
  );
}
