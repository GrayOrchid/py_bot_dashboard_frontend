import React from 'react';
import './connector.scss';

export const ConnectorHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="connector__header">{children}</div>
);

export const ConnectorStatusGroup = ({ children }: { children: React.ReactNode }) => (
    <div className="connector__status-group">{children}</div>
);

export const ConnectorLabel = ({ text }: { text: string }) => (
    <span className="connector__label">{text}</span>
);

export const ConnectorName = ({ text }: { text?: string }) => (
    <h3 className="connector__name">{text}</h3>
);

export const ConnectorActions = ({ children }: { children: React.ReactNode }) => (
    <div className="connector__actions">{children}</div>
);

export const ConnectorConnectedActions = ({ children }: { children: React.ReactNode }) => (
    <div className="connector__connected-actions">{children}</div>
);
