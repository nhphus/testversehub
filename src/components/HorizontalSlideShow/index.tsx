import { useState } from "react";
import styles from "./HorizontalSlideShow.module.scss";

interface Props {
  listImage: any[];
  listInformation: any[];
}

const HorizontalSlideShow = ({ listImage, listInformation }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const _handleClickItem = (index: number) => {
    setSelectedIndex(index);
  };

  const _renderItem = (item: string, index: number) => {
    const i =
      index > selectedIndex ? index - selectedIndex : selectedIndex - index;
    const size = i < 4 ? 100 - 30 * i : 10;
    return (
      <li onClick={() => _handleClickItem(index)}>
        <img
          style={{
            width: size,
            height: size,
            transform: `translateX(${
              index > selectedIndex
                ? 20 * i + 60 * (i - 1)
                : index < selectedIndex
                ? -(80 * i)
                : 0
            }px)`,
          }}
          className={`${
            index === selectedIndex
              ? styles.selectedItem
              : styles.unselectedItem
          } ${styles.image}`}
          src={item ?? ""}
        />
        {index === selectedIndex && <div> {listInformation[index] ?? ""}</div>}
      </li>
    );
  };

  return (
    <div className={styles.slideShowContainer}>
      <ul>{listImage.map(_renderItem)}</ul>
    </div>
  );
};

export default HorizontalSlideShow;
