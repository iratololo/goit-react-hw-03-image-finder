import css from "./Searchbar.module.css"

export const Searchbar = ({handleOnSubmit}) => {
        return (
            <header className={css.searchbar}>
                <form onSubmit={handleOnSubmit} className={css.form}>
                    <button type="submit" className={css.button}>
                        <span>Search</span>
                    </button>

                    <input
                    className={css.input}
                    name='search'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
}