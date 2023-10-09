export type ITemplates =
  | { view: 'confirmation'; context: { confirmationLink: string } }
  | { view: 'recovery'; context: { recoveryLink: string } };
