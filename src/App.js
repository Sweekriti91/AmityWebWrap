import "./App.css";

// import { AmityUiKitFeed, AmityUiKitProvider, AmityUIKitCommunitySideSection } from "@amityco/ui-kit-open-source";
import { AmityUiKitFeed, AmityUiKitProvider, AmityUiKitSocial, AmityUIKitCommunityList, AmityUIKitCommunitySideSection } from "@amityco/ui-kit-open-source";
const apiKey = "b3bee90c39d9a5644831d84e5a0d1688d100ddebef3c6e78";

export default function App() {
  return (
    <div className="App" styles={{ height: '500px', overflowY: 'scroll' }} >
      <div id="testButtonGroup" onClick={() => setAmityTabView("group")} className={"test-button"}>GROUP BUTTON</div>
      <div id="testButtonNews" onClick={() => setAmityTabView("news")} className={"test-button"}>NEWS BUTTON</div>
      
      <AmityUiKitProvider
               key="test"
               apiKey={apiKey}
               userId="test"
               displayName="test">
        <div id="amityAmpasNewsFeedContainer">
          <AmityUiKitFeed/>
        </div>
        <div id="amityAmpasGroupContainer">
          <AmityUIKitCommunityList className="community-list"
        communitiesQueryParam={{ membership: 'member', limit: 20 }}
        activeCommunity="community"/> 
        </div>
      </AmityUiKitProvider>
    </div>
  );
}

window.testValSetData = function(val)
{
  setAmityTabView(val.toString());
  // console.log("CALLING FROM .NET SET PAGE TO:" + val.ToString());
}

function setAmityTabView(typeName) {
  var newsFeedViewContainer = document.getElementById("amityAmpasNewsFeedContainer"); // any container element id for news feed page
  var groupViewContainer = document.getElementById("amityAmpasGroupContainer"); // any container element id for group page
  if (newsFeedViewContainer && groupViewContainer) {
      // set by type name parameter
      switch (typeName) {
          case "news":
              // load/show news feed page and hide group page
              if (groupViewContainer) {
                  groupViewContainer.style.display = "none";
              }
              if (newsFeedViewContainer) {
                  newsFeedViewContainer.style.display = "";
              }
              break;
          case "group":
              // load/show group page and hide news feed page
              if (newsFeedViewContainer) {
                  newsFeedViewContainer.style.display = "none";
              }
              if (groupViewContainer) {
                  groupViewContainer.style.display = "";
              }
              break;
          default:
              // hide both pages
              if (newsFeedViewContainer) {
                  newsFeedViewContainer.style.display = "none";
              }
              if (groupViewContainer) {
                  groupViewContainer.style.display = "none";
              }
              break;
      }
  }
}