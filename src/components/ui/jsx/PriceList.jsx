import { useState, useEffect } from "react";

const LoadingBar = () => (
  <div className="flex flex-col gap-2 pb-5">
    <div className="animate-pulse bg-gray-300 w-full h-5"></div>
    <div className="animate-pulse bg-gray-300 w-8/12 h-5"></div>
  </div>
);

const ItemList = ({
  title,
  description,
  price,
  en,
  es,
  comment,
  country,
  glass,
}) => {
  if (!title) {
    return null;
  }

  return (
    <li className="flex justify-between gap-5 text-black dark:text-white-light break-inside-avoid pb-5">
      <div>
        <div className="flex gap-1 sm:gap-3 flex-col sm:flex-row">
          <h4 className="inline text-[1.25rem] leading-none font-display font-thin uppercase">
            {es ? title.es : en ? title.en : ""}
          </h4>

          {country.es && (
            <span className="flex items-center gap-3">
              <img
                src="/images/ellipse.svg "
                className="w-2 hidden sm:inline"
                aria-hidden="true"
              />
              <span className="inline translate-y-[-2px] text-body-xs font-bold">
                {es ? country.es : en ? country.en : ""}
              </span>
            </span>
          )}

          {comment.es && (
            <span className="inline translate-y-[-2px] text-body-xs">
              {es ? comment.es : en ? comment.en : ""}
            </span>
          )}
        </div>
        {description.es && (
          <p className="medium mt-2 text-body-sm font-thin sm:pr-16">
            {es ? description.es : en ? description.en : ""}
          </p>
        )}
      </div>
      <div className="text-[1.25rem] leading-none font-display flex flex-col items-end gap-2">
        <span>{price ? price + "€" : "Sin stock"}</span>
        {glass && (
          <span className="flex gap-4">
            <img src="/images/copa-icon.svg" aria-hidden="true" loading="lazy" className="h-6 mix-blend-difference"/>
            <span>{glass}€</span>
          </span>
        )}
      </div>
    </li>
  );
};

export function PriceList({ en, es, dataSheet, twoCol = false }) {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const spreadsheetId = "1cTdXtdjmRizoXp6i8MBk45BNt5w1_g-TLm4Sn__7hDc";
  const datasetSheet = dataSheet;

  const API_KEY = "AIzaSyAqwV67rkOZKd9T9QQudrvwoeN0fmqxepY";
  const getUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${datasetSheet}?key=${API_KEY}`;

  useEffect(() => {
    fetch(getUrl)
      .then((response) => response.json())
      .then((data) => {
        const rows = data.values.slice(1);
        const items = rows.map((row) => ({
          title: {
            es: row[0],
            en: row[1],
          },
          description: {
            es: row[2],
            en: row[3],
          },
          price: row[4],
          comment: {
            es: row[5],
            en: row[6],
          },
          country: {
            es: row[7],
            en: row[8],
          },
          glass: row[9],
        }));
        setMenuItems(items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <ul
          className={`gap-x-[7.5rem] ${
            twoCol ? "sm:columns-2" : "flex flex-col"
          }`}
        >
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
        </ul>
      ) : (
        <ul
          className={`gap-x-[7.5rem] ${
            twoCol ? "sm:columns-2" : "flex flex-col"
          }`}
        >
          {menuItems.map((item, index) => (
            <ItemList
              en={en}
              es={es}
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              comment={item.comment}
              country={item.country}
              glass={item.glass}
            />
          ))}
        </ul>
      )}
    </>
  );
}
