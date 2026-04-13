import styles from "./ProfileCard.module.css";
import type { User } from "../Types/User";
import { useState } from "react";

type Props = {
  user: User;
  index: number;
  onAddToFavourites?: (user: User) => void;
  onRemoveFromFavourites?: (user: User) => void;
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatRegistered(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export default function ProfileCard({
  user,
  index,
  onAddToFavourites,
  onRemoveFromFavourites,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  // Build a short user ID from the index
  const userId = `#USR-${String(index + 1).padStart(5, "0")}`;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <div className={styles.avatarWrapper}>
            {user.picture.large ? (
              <img
                className={styles.avatar}
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
            ) : (
              <div></div>
            )}
            <div className={styles.onlineDot} />
          </div>

          <p className={styles.fullName}>
            {user.name.first} {user.name.last}
          </p>
          <p className={styles.userId}>{userId}</p>

          <span className={styles.genderBadge}>{user.gender}</span>

          <hr className={styles.divider} />

          <p className={styles.countryLabel}>Country</p>
          <p className={styles.countryValue}>{user.location.country}</p>
        </div>

        {/* ── RIGHT ── */}
        <div className={styles.right}>
          {/* Name + Age Badge */}
          <div className={styles.nameHeading}>
            <h1 style={{ display: "flex", margin: 0 }}>
              <span className={styles.firstName}>{user.name.first}</span>
              <span className={styles.lastName}>{user.name.last}</span>
            </h1>
            <div className={styles.ageBadge}>
              <span className={styles.ageNumber}>{user.dob.age}</span>
              <span className={styles.ageLabel}>yrs old</span>
            </div>
          </div>

          <p className={styles.memberSince}>
            member since · {formatRegistered(user.registered.date)}
          </p>

          <hr className={styles.separator} />

          {/* Info rows */}
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <td className={styles.infoLabel}>Phone</td>
                <td className={styles.infoValue}>
                  <a className={styles.phoneLink} href={"tel:+1234567890"}>
                    {user.phone}
                  </a>
                </td>
              </tr>
              <tr>
                <td className={styles.infoLabel}>Date of Birth</td>
                <td className={styles.infoValue}>
                  {formatDate(user.dob.date)}
                  <span className={styles.infoValueSmall}>
                    · {user.dob.age} yrs
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.infoLabel}>Country</td>
                <td className={styles.infoValue}>
                  {user.location.country}
                  <span className={styles.infoValueSmall}>
                    · {user.location.state}
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.infoLabel}>Gender</td>
                <td className={styles.infoValue}>
                  {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                </td>
              </tr>

              <tr>
                <td className={styles.infoLabel}>Gender</td>
                <td className={styles.infoValue}>
                  {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                </td>
              </tr>

              {/* ── NEW: favourite button ── */}
              {onAddToFavourites && (
                <tr>
                  <td colSpan={2} style={{ paddingTop: "12px" }}>
                    <button
                      className={styles.expandBtn}
                      onClick={() => onAddToFavourites?.(user)}
                    >
                      ❤️ Add To favourites
                    </button>
                  </td>
                </tr>
              )}
              {onRemoveFromFavourites && (
                <tr>
                  <td colSpan={2} style={{ paddingTop: "12px" }}>
                    <button
                      className={styles.expandBtn}
                      onClick={() => onRemoveFromFavourites?.(user)}
                    >
                      X Remove from favourites
                    </button>
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan={2}>
                  <button
                    className={styles.expandBtn}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Collapse" : "Expand"}
                  </button>
                </td>
              </tr>

              {/* Used Conditional Renderg*/}
              {isExpanded && (
                <>
                  <tr>
                    <td className={styles.infoLabel}>Email</td>
                    <td className={styles.infoValue}>
                      <a
                        className={styles.phoneLink}
                        href={`mailto:someone@example.com`}
                      >
                        {user.email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Username</td>
                    <td className={styles.infoValue}>{user.login.username}</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Timezone</td>
                    <td className={styles.infoValue}>
                      {user.location.timezone.offset}
                      <span className={styles.infoValueSmall}>
                        · {user.location.timezone.description}
                      </span>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
