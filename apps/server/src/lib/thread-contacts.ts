import type { ParsedMessage } from '../types';

export const getParticipants = (messages: ParsedMessage[]) => {
  const participants = new Map<string, { name?: string; email: string }>();

  const setIfUnset = (sender: any) => {
    if (!sender?.email) return;
    if (!participants.has(sender.email)) {
      participants.set(sender.email, {
        name: sender.name,
        email: sender.email,
      });
    }
  };

  messages.forEach((message) => {
    setIfUnset(message.sender);
    (message.to || []).forEach(setIfUnset);
    (message.cc || []).forEach(setIfUnset);
  });

  return Array.from(participants.values());
};
