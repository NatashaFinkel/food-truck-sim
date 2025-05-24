export default interface AppButtonProps {
  id: string;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}
