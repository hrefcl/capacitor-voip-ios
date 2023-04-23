export interface CapacitorVoipIosPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
