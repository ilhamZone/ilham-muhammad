import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  email,
}) => (
  <div>
    <h1>Email: {email}</h1>
    <h1>
      Hai Brother, I`m {name}.<br />I want to say: {message}!
    </h1>
  </div>
);
