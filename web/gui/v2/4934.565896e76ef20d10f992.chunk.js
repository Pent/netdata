!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dcefcc94-4b10-4f7e-8ada-f451e3b77252",e._sentryDebugIdIdentifier="sentry-dbid-dcefcc94-4b10-4f7e-8ada-f451e3b77252")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"6845f9ce010d5a446e5d4a40f17204cb8341a07a"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[4934],{64934:function(e,n,t){t.r(n),t.d(n,{Trust:function(){return l}});var a=t(29439),r=(t(74916),t(64765),t(69826),t(41539),t(31672),t(2490),t(59461),t(15306),t(92222),t(67294)),o=t(17563),c=t(64969),i=t(1043),d=t(78266),l=function(){var e=(0,r.useMemo)((function(){var e=window.location.search,n=o.parse(e);return[n.redirect_uri,n.agent_uri]})),n=(0,a.Z)(e,2),t=n[0],l=n[1],u=(0,i.So)(),f=(0,a.Z)(u,3),s=f[0],g=f[1],b=f[2],m=(0,i.aJ)({},[s]),p=(0,a.Z)(m,2),w=p[0],y=p[1];return(0,r.useEffect)((function(){var e=w.find((function(e){return e.url===l}));e&&location.replace("/api/v1/auth/account/origins/".concat(e.id,"/redirect?redirect_uri=").concat(encodeURIComponent(t),"&agent_uri=").concat(encodeURIComponent(l)))}),[t,l,w]),r.createElement(c.Layer,{full:!0},r.createElement(c.Flex,{"data-testid":"trust",alignItems:"center",justifyContent:"center",column:!0,width:"100%",height:"100%",background:"mainBackground",gap:4},r.createElement(d.H,{animate:b}),r.createElement(c.Text,{textAlign:"center"},"Do you trust ",r.createElement(c.Text,{strong:!0},l),"?"),r.createElement(c.Flex,{column:!0,gap:2,alignItems:"center"},r.createElement(c.TextBig,null,"Authorizing this URL will allow it to request your Netdata data."),r.createElement(c.Flex,{gap:2},r.createElement(c.Button,{flavour:"borderless",onClick:function(){return window.location.replace(decodeURIComponent(t))},disabled:y||b},"Cancel"),r.createElement(c.Button,{onClick:function(){return g(l)},disabled:y||b,isLoading:y||b},"Yes")))))};n.default=l}}]);