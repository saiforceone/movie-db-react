import {FC, ReactNode} from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  actions?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({title, actions}) => {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      {actions && (
        <div className="page-header__actions">
          {actions}
        </div>
      )}
    </div>
  );
};
