import type { ParsedMessage } from '../types';

type ThreadContact = {
  name?: string;
  email: string;
};

type AddressLike = {
  name?: string;
  email?: string;
};

export const collectThreadContacts = (messages: ParsedMessage[]): ThreadContact[] => {
  const contactsByEmail = new Map<string, ThreadContact>();

  const rememberContact = (address: AddressLike | undefined) => {
    if (!address?.email) return;
    if (!contactsByEmail.has(address.email)) {
      contactsByEmail.set(address.email, {
        name: address.name,
        email: address.email,
      });
    }
  };

  for (const item of messages) {
    rememberContact(item.sender);
    (item.to || []).forEach(rememberContact);
    (item.cc || []).forEach(rememberContact);
  }

  return Array.from(contactsByEmail.values());
};
