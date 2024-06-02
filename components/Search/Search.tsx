import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import SearchIcon from './Search.svg';
import cn from 'clsx';
import { useRouter } from "next/router";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key == 'Enter'){
            goToSearch();
        }
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input 
                className={styles.input} 
                placeholder="Search..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={goToSearch}
                aria-label="Search for site"
            >
                <SearchIcon />

            </Button>
        </div>
    );
};