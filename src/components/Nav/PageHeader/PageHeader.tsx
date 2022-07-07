import {FC} from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: FC<PageHeaderProps> = ({title}) => {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
    </div>
  );
};
