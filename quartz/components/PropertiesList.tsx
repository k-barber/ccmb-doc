import { pathToRoot, slugTag, transformLink, resolveRelative, SimpleSlug } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PropertiesList: QuartzComponent = ({ fileData, displayClass, ctx }: QuartzComponentProps) => {
  const tags = fileData.frontmatter?.tags
  // console.log(fileData.frontmatter)
  const locations = fileData.frontmatter?.location as Array<string>

  const rank = fileData.frontmatter?.rank
  var socialClass

  var icon
  if (rank) {
    switch (rank) {
      case "Emperor":
      case "Empress":
      case "King":
      case "Queen":
      case "Archduke":
      case "Archduchess":
      case "Prince":
      case "Princess":
        socialClass = "Royal"
        icon = transformLink(fileData.slug!, "royal.svg", {
          strategy: "shortest",
          allSlugs: ctx.allSlugs,
        })
        break
      case "Duke":
      case "Duchess":
      case "Marquis":
      case "Marchioness":
        socialClass = "Archnoble"
        icon = transformLink(fileData.slug!, "archnoble.svg", {
          strategy: "shortest",
          allSlugs: ctx.allSlugs,
        })
        break
      case "Earl":
      case "Count":
      case "Countess":
      case "Viscount":
      case "Viscountess":
        socialClass = "Mednoble"
        icon = transformLink(fileData.slug!, "mednoble.svg", {
          strategy: "shortest",
          allSlugs: ctx.allSlugs,
        })
        break
      case "Baron":
      case "Baroness":
      case "Baronet":
      case "Knight":
        socialClass = "Laynoble"
        icon = transformLink(fileData.slug!, "laynoble.svg", {
          strategy: "shortest",
          allSlugs: ctx.allSlugs,
        })
        break
      default:
        socialClass = "commoner"
        icon = transformLink(fileData.slug!, "commoner.svg", {
          strategy: "shortest",
          allSlugs: ctx.allSlugs,
        })
        break
    }
  }

  return (
    <>
      {icon && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            float: "right",
          }}
        >
          <img
            height="150px"
            src={icon}
            title={
              fileData.frontmatter?.title +
              (rank ? " is a " + rank : " has no rank") +
              ". They are " +
              (socialClass == "archnoble" ? "an " : "a ") +
              socialClass +
              "."
            }
          />
          <span>{socialClass + ": " + rank}</span>
        </div>
      )}
      {locations && locations.length > 0 && (
        <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
          <div class="breadcrumb-element">
            <a
              href={transformLink(fileData.slug!, "Luachia", {
                strategy: "shortest",
                allSlugs: ctx.allSlugs,
              })}
            >
              Luachia
            </a>
            <p> ❯ </p>
          </div>
          {locations.map((location, index) => (
            <div class="breadcrumb-element">
              <a
                href={transformLink(fileData.slug!, location.substring(2, location.length - 2), {
                  strategy: "shortest",
                  allSlugs: ctx.allSlugs,
                })}
              >
                {location.substring(2, location.length - 2)}
              </a>
              {index !== locations.length - 1 && <p> ❯ </p>}
            </div>
          ))}
        </nav>
      )}
      {/* {JSON.stringify(fileData.frontmatter)} */}
    </>
  )
}

PropertiesList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-self: end;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}
`

export default (() => PropertiesList) satisfies QuartzComponentConstructor
