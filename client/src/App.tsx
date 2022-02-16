import './App.css';

import { useQuery, gql } from "@apollo/client";
import images from "./images/loadImages";

const HOMEPAGE_QUERY = gql`
query {
  homePage {
    heading
    toolSets {
      heading
      tools {
        logoKey
        toolTip
        logoHeightPx
      }
    }
  }
}
`

export const HomePage = () => {
  const {data} = useQuery(HOMEPAGE_QUERY);

  return (
      <main>{data && (
          <>
              <Heading heading={data.homePage.heading}/>
              <div className="tool-sets-container">
                  {data.homePage.toolSets
                  .map((toolSet:any, index:number) => 
                      <ToolSet
                          key={index}
                          heading={toolSet.heading}
                          tools={toolSet.tools}/>
                  )}
              </div>
          </>
      )}
      </main>)
}
export const Heading = (props: { heading: string }) => {
  return <h1>{props.heading}</h1>
}

const ToolSet = (props: { 
  heading: string; 
  tools: {
    logoKey: string,
    logoHeightPx: number,
    index: number}[]
  }) => {
  return (
      <section className="tool-set-container">
          <h2>{props.heading}</h2>
          <div className="logos-container">
              {props.tools.map((tool, index) =>
                  <img
                      alt='tool logo' 
                      key={index}
                      src={images[tool.logoKey]}
                      height={tool.logoHeightPx? tool.logoHeightPx+"px": "32px"}
                      className="logo"/>)
              }
          </div>
      </section>
  );
}