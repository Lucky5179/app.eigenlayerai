"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8140],
  {
    26821: function (e, t, n) {
      n.d(t, {
        U: function () {
          return g;
        },
        v: function () {
          return _;
        },
      });
      var r = n(81438),
        a = n(94188),
        s = n(79774),
        i = n(4766),
        o = n(66093),
        l = n(96019),
        d = n.n(l),
        u = n(43424);
      let c = [
          u.O.NEXT_PUBLIC_ALCHEMY_API_KEY &&
            "https://eth-"
              .concat(
                "1" === u.O.NEXT_PUBLIC_CHAIN_ID ? "mainnet" : "holesky",
                ".g.alchemy.com/v2/"
              )
              .concat(u.O.NEXT_PUBLIC_ALCHEMY_API_KEY),
        ].filter(Boolean),
        _ = (0, i.v8)(
          u.O.NEXT_PUBLIC_CHAIN_ID,
          o.NX,
          {
            name: "edgelayerAI",
            description: "edgelayerAI",
            url: "app.edgelayerAI.xyz",
            icons: ["https://avatars.githubusercontent.com/u/92827658"],
          },
          c
        );
      function f(e) {
        let { config: t, children: n } = e;
        return (0, r.jsx)(s.F, { config: t, children: n });
      }
      function g(e) {
        let { children: t } = e;
        return (0, r.jsx)(i.Qg, {
          projectId: o.NX,
          WagmiProvider: f,
          wagmiConfig: _,
          QueryClientProvider: a.aH,
          themeVariables: { "--w3m-font-family": d().style.fontFamily },
          children: t,
        });
      }
    },
    29709: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(42371),
        a = n(42140),
        s = n(31680);
      let i = (e) =>
        "tokenSharesStrats" in e && "tokenTVL" in e && "ethValue" in e;
      class o {
        _findTokenSharesToUnderlyingFactor() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return null ===
            (e = t.find((e) =>
              this.matchesTokenStrategy(null == e ? void 0 : e.strategy)
            )) || void 0 === e
            ? void 0
            : e.sharesToUnderlying;
        }
        get sharesToUnderlyingFactor() {
          return this._sharesToUnderlyingFactor;
        }
        set sharesToUnderlyingFactor(e) {
          let t;
          (t =
            "bigint" == typeof e
              ? e
              : Array.isArray(e)
              ? this._findTokenSharesToUnderlyingFactor(e)
              : null == e
              ? void 0
              : e.sharesToUnderlying) && (this._sharesToUnderlyingFactor = t);
        }
        setDeposits(e) {
          return (
            (this.deposited = {
              shares: e,
              underlying: this.convertSharesToUnderlying(e),
            }),
            this.deposited
          );
        }
        setTVL(e) {
          if ("number" == typeof e) this.tvl = e;
          else {
            let t = this.convertSharesToUnderlying(e);
            this.tvl = Number((0, r.b)(t, this.decimals));
          }
        }
        setNativeTVL(e) {
          this.tvl = Number((0, r.b)(e, this.decimals));
        }
        setUSD(e) {
          this.usd = e;
        }
        setMarketCap(e) {
          this.marketCap = e;
        }
        constructor(e, t) {
          (this.balance = 0n),
            (this.deposited = { shares: 0n, underlying: 0n }),
            (this.tvl = 0),
            (this.usd = 0),
            (this.marketCap = 0),
            (this._sharesToUnderlyingFactor = s.Cj),
            (this.matchesTokenStrategy = (e) =>
              (0, a.EU)(e, this.strategyAddress)),
            (this.convertSharesToUnderlying = (e, t) => {
              let n =
                (BigInt(null != e ? e : 0n) * this.sharesToUnderlyingFactor) /
                s.Cj;
              return (null == t ? void 0 : t.format) === "decimal"
                ? this.formatWithDecimals(n, {
                    string: null == t ? void 0 : t.string,
                  })
                : (null == t ? void 0 : t.string)
                ? n.toString()
                : n;
            }),
            (this.convertUnderlyingToShares = (e, t) => {
              let n = (e * s.Cj) / this.sharesToUnderlyingFactor;
              return (null == t ? void 0 : t.format) === "decimal"
                ? this.formatWithDecimals(n, {
                    string: null == t ? void 0 : t.string,
                  })
                : (null == t ? void 0 : t.string)
                ? n.toString()
                : n;
            }),
            (this.formatWithDecimals = (e, t) => {
              let n = (0, r.b)(e, this.decimals);
              return (null == t ? void 0 : t.string) ? n : Number(n);
            }),
            (this.initializeNativeToken = (e) => {
              let {
                price: t,
                sharesToUnderlyings: n,
                userAddress: r,
                globalPodSummary: a,
                podOwnerShares: s,
                marketCap: i,
              } = e;
              (this.sharesToUnderlyingFactor = n),
                r && this.setDeposits(s),
                this.setNativeTVL(BigInt(a.balance)),
                this.setUSD(t),
                (this.ethValue = 1),
                this.setMarketCap(i);
            }),
            (this.initialize = (e) => {
              let {
                price: t = 0,
                ethValue: n,
                sharesToUnderlyings: r,
                userAddress: a,
                tokenSharesStrats: s,
                tokenTVL: i,
                marketCap: o,
              } = e;
              if (((this.sharesToUnderlyingFactor = r), a)) {
                let e = s.strategies.findIndex(this.matchesTokenStrategy),
                  t = s.shares[e] || 0n;
                this.setDeposits(t);
              }
              this.setTVL(i),
                this.setUSD(t),
                (this.ethValue = n),
                this.setMarketCap(o);
            }),
            (this.address = e.address),
            (this.slug = e.slug),
            (this.icon = e.icon),
            (this.strategyAddress = e.strategyAddress),
            (this.name = e.name),
            (this.symbol = e.symbol),
            (this.decimals = e.decimals),
            (this.rebasing = e.rebasing),
            (this.apiID = e.apiID),
            (this.about = e.about),
            (this.group = e.group),
            (this.types = e.types),
            (this.marketCap = (null == e ? void 0 : e.marketCap) || 0),
            (this.mainnetAddress = e.mainnetAddress),
            i(t) ? this.initialize(t) : this.initializeNativeToken(t);
        }
      }
    },
    33849: function (e, t, n) {
      var r = n(81438),
        a = n(66427),
        s = n(84710),
        i = n(4766),
        o = n(61842);
      t.Z = function (e) {
        let {
            children: t,
            href: n,
            isExternalLink: l = !1,
            openInNewTab: d,
            className: u,
            onClick: c,
          } = e,
          { impersonationAddress: _ } = (0, o.Z)(),
          f = (0, a.useMemo)(
            () => (_ ? "".concat(n, "?impersonate=").concat(_) : n),
            [n, _]
          ),
          g = (0, r.jsx)(i._T, {
            intent: "TextM",
            font: "ibmPlexMono",
            className: u,
            children: t,
          });
        return l
          ? (0, r.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              children: g,
            })
          : (0, r.jsx)(s.default, {
              target: d ? "_blank" : void 0,
              onClick: c,
              href: f,
              children: g,
            });
      };
    },
    40589: function (e, t, n) {
      let r;
      n.d(t, {
        stakeConfig: function () {
          return r;
        },
      }),
        (r = n(66093).q$);
    },
    43424: function (e, t, n) {
      n.d(t, {
        O: function () {
          return i;
        },
      });
      var r = n(25932),
        a = n(29164),
        s = n(32608);
      let i = (0, r.D)({
        server: {
          NODE_ENV: a.z.enum(["development", "test", "production"]),
          NEXT_PUBLIC_CHAIN_ID: a.z.string().min(1),
          COINGECKO_API_KEY: a.z.string().min(1),
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI: a.z.string().min(1),
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI_V2: a.z.string().min(1),
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI_V2_REST: a.z.string().min(1),
          NEXT_PUBLIC_VERCEL_ENV: a.z.enum([
            "development",
            "production",
            "preview",
          ]),
          CHAINALYSIS_API_KEY: a.z.string().min(1),
          NEXT_PUBLIC_CHAINALYSIS_URL: a.z.string().min(1),
          OPERATOR_BLOCKLIST: a.z.string(),
          NEXT_PUBLIC_SANCTIONS_ON: a.z.boolean(),
          NEXT_PUBLIC_RESTAKE_DISPLAY: a.z.object({
            price: a.z.array(a.z.object({})),
          }),
          AVS_ALLOWLIST: a.z.string(),
          NEXT_PUBLIC_CONTRACT_ENV: a.z.enum([
            "mainnet-ethereum",
            "testnet-holesky",
            "preprod-holesky",
          ]),
          STAKER_ADDRESS_ALLOWLIST: a.z.string().optional(),
          NEXT_PUBLIC_PROOFS_SERVICE_URL: a.z.string().min(1),
          NEXT_PUBLIC_DD_RUM_APP_ID: a.z.string(),
          NEXT_PUBLIC_DD_RUM_CLIENT_TOKEN: a.z.string(),
          NEXT_PUBLIC_DD_RUM_SAMPLE_RATE: a.z.number(),
          NEXT_PUBLIC_DD_RUM_REPLAY_SAMPLE_RATE: a.z.number(),
          NEXT_PUBLIC_DD_RUM_ENV: a.z.string(),
          TOKEN_BANLIST: a.z.string(),
          NEXT_PUBLIC_LONGTAIL_VERSION: a.z.enum(["v0", "v1", "v2"]),
          EPI_URL: a.z.string().min(1),
          NEXT_PUBLIC_GA_TAG: a.z.string().min(1).optional(),
          NEXT_PUBLIC_SLASHING_VERSION: a.z.enum([
            "m0",
            "m1",
            "m2",
            "m3",
            "m4",
          ]),
        },
        client: {
          NEXT_PUBLIC_BLOCK_EXPLORER_URL: a.z.string().min(1),
          NEXT_PUBLIC_CHAIN_ID: a.z.string().min(1),
          NEXT_PUBLIC_VERCEL_ENV: a.z.enum([
            "development",
            "production",
            "preview",
          ]),
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI: a.z.string().min(1),
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI_V2: a.z.string().min(1),
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI_V2_REST: a.z.string().min(1),
          NEXT_PUBLIC_SANCTIONS_ON: a.z.boolean(),
          NEXT_PUBLIC_ALCHEMY_API_KEY: a.z.string(),
          NEXT_PUBLIC_RESTAKE_DISPLAY: a.z.object({
            display_order: a.z.string().array(),
          }),
          NEXT_PUBLIC_CENTRALIZED_RISK: a.z.number().min(0),
          NEXT_PUBLIC_CONTRACT_ENV: a.z.enum([
            "mainnet-ethereum",
            "testnet-holesky",
            "preprod-holesky",
          ]),
          NEXT_PUBLIC_CENTRALIZED_RISK_TOGGLE: a.z.boolean(),
          NEXT_PUBLIC_PROOFS_SERVICE_URL: a.z.string().min(1),
          NEXT_PUBLIC_BATCH_SIZE: a.z.number().min(1),
          NEXT_PUBLIC_DD_RUM_APP_ID: a.z.string(),
          NEXT_PUBLIC_DD_RUM_CLIENT_TOKEN: a.z.string(),
          NEXT_PUBLIC_DD_RUM_SAMPLE_RATE: a.z.number(),
          NEXT_PUBLIC_DD_RUM_REPLAY_SAMPLE_RATE: a.z.number(),
          NEXT_PUBLIC_DD_RUM_ENV: a.z.string(),
          NEXT_PUBLIC_INCENTIVES_VERSION: a.z.enum(["v0", "v1", "v2"]),
          NEXT_PUBLIC_LONGTAIL_VERSION: a.z.enum(["v0", "v1", "v2"]),
          NEXT_PUBLIC_GA_TAG: a.z.string().min(1).optional(),
          NEXT_PUBLIC_SLASHING_VERSION: a.z.enum([
            "m0",
            "m1",
            "m2",
            "m3",
            "m4",
          ]),
        },
        runtimeEnv: {
          NODE_ENV: "production",
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI:
            "http://172.0.0.1:7200/api/v1",
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI_V2_REST:
            "http://172.0.0.1:7200/api/v1".replace(
              /v1$/,
              "v2"
            ),
          NEXT_PUBLIC_edgelayerAI_BACKEND_URI_V2:
            "http://172.0.0.1:7200/grpc",
          NEXT_PUBLIC_BLOCK_EXPLORER_URL: "https://etherscan.io",
          NEXT_PUBLIC_CHAIN_ID: "1",
          NEXT_PUBLIC_ALCHEMY_API_KEY: "TBD_HhLzXbrC59ikn3LEyjLA9Spe_i4I",
          COINGECKO_API_KEY: s.env.COINGECKO_API_KEY,
          NEXT_PUBLIC_VERCEL_ENV: "production",
          CHAINALYSIS_API_KEY: s.env.CHAINALYSIS_API_KEY,
          NEXT_PUBLIC_CHAINALYSIS_URL: "https://api.chainalysis.com",
          NEXT_PUBLIC_SANCTIONS_ON: !0,
          OPERATOR_BLOCKLIST: s.env.OPERATOR_BLOCKLIST,
          NEXT_PUBLIC_RESTAKE_DISPLAY: JSON.parse(
            '{"display_order":["EIGEN","native","lst"],"price":[]}'
          ),
          AVS_ALLOWLIST: s.env.AVS_ALLOWLIST,
          STAKER_ADDRESS_ALLOWLIST: s.env.STAKER_ADDRESS_ALLOWLIST,
          NEXT_PUBLIC_CONTRACT_ENV: "mainnet-ethereum",
          NEXT_PUBLIC_CENTRALIZED_RISK: parseFloat("0.1"),
          NEXT_PUBLIC_CENTRALIZED_RISK_TOGGLE: !0,
          NEXT_PUBLIC_PROOFS_SERVICE_URL:
            "https://proofs-service-json.mainnet-ethereum.protocol-mainnet.eigenlabshq.net",
          NEXT_PUBLIC_BATCH_SIZE: parseInt("10"),
          NEXT_PUBLIC_DD_RUM_APP_ID: "959ef8b5-60fc-4b72-8bc2-0c768babd9c9",
          NEXT_PUBLIC_DD_RUM_CLIENT_TOKEN:
            "pub7cb1610100e24faff2422575b7d07dd6",
          NEXT_PUBLIC_DD_RUM_SAMPLE_RATE: Number("100"),
          NEXT_PUBLIC_DD_RUM_REPLAY_SAMPLE_RATE: Number("25"),
          NEXT_PUBLIC_DD_RUM_ENV: "mainnet",
          NEXT_PUBLIC_LONGTAIL_VERSION: "v1",
          TOKEN_BANLIST: s.env.TOKEN_BANLIST,
          NEXT_PUBLIC_INCENTIVES_VERSION: "v1",
          EPI_URL: s.env.EPI_URL,
          NEXT_PUBLIC_GA_TAG: "G-CX6Z3SL81R",
          NEXT_PUBLIC_SLASHING_VERSION:
            s.env.NEXT_PUBLIC_SLASHING_VERSION || "m0",
        },
        skipValidation: !!s.env.SKIP_ENV_VALIDATION,
      });
    },
    27196: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(66427),
        a = n(83062),
        s = n(3102),
        i = n(77809),
        o = n(43424),
        l = (e) =>
          i.h.access.getAccess.useQuery(
            { address: e },
            {
              staleTime: 36e5,
              gcTime: 36e5,
              enabled: !!e && !!o.O.NEXT_PUBLIC_SANCTIONS_ON,
              trpc: { context: { skipBatch: !0 } },
            }
          ),
        d = n(61842),
        u = () => {
          var e;
          let t = (0, s.m)(),
            n = null == t ? void 0 : t.address,
            i =
              null === (e = (0, a.useSearchParams)()) || void 0 === e
                ? void 0
                : e.get("impersonate"),
            {
              selectedProfile: o,
              connectedAddress: u,
              impersonationAddress: c,
              isImpersonating: _,
              setSelectedProfile: f,
              setConnectedAddress: g,
              setImpersonationAddress: h,
              setWriteAccess: E,
            } = (0, d.Z)(),
            m = (null == o ? void 0 : o.address) || c || n,
            I = !!m,
            L = l(n),
            N = l(c),
            T = "deny" === L.data || "deny" === N.data,
            p = "restrict" === L.data || "restrict" === N.data;
          return (
            (0, r.useEffect)(() => {
              i && !T ? h(i) : h(void 0),
                c && c !== u
                  ? (g(c), f({ address: c }))
                  : n === u || i || (g(n), f({ address: n })),
                I && E(m === u);
            }, [
              i,
              T,
              c,
              u,
              n,
              null == o ? void 0 : o.address,
              I,
              m,
              h,
              g,
              f,
              E,
            ]),
            {
              ...t,
              isImpersonating: _,
              address: T ? void 0 : m,
              connectedWalletAddress: T ? void 0 : n,
              isConnected: I,
              addressAccess: L,
              isAddressRestricted: p,
            }
          );
        };
    },
    63921: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(32670),
        a = n(2142),
        s = n(26821),
        i = n(40589);
      let o = async (e) => {
        try {
          let t = await (0, r.L)(s.v, {
            address: i.stakeConfig.delegationManagerAddress,
            abi: a.oG,
            functionName: "getDelegatableShares",
            args: [e],
          });
          return { shares: t[1], strategies: t[0] };
        } catch (e) {
          throw Error("Failed to fetch currentRestaked");
        }
      };
      var l = n(38778),
        d = n(27196),
        u = () => {
          let { address: e } = (0, d.Z)();
          return (0, l.a)({
            queryKey: ["tokenSharesStrats", e],
            queryFn: async () => (e ? await o(e) : void 0),
            staleTime: 6e3,
            refetchOnWindowFocus: !0,
            enabled: !!e,
          });
        };
    },
    24348: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var r = n(66427),
        a = n(42140),
        s = n(27196),
        i = n(63921),
        o = n(20177),
        l = n(38778),
        d = n(32430),
        u = n.n(d),
        c = n(93085),
        _ = n(2142),
        f = n(26821),
        g = n(31680),
        h = (e) => {
          let { tokens: t = [] } = e;
          return (0, l.a)({
            queryKey: ["getSharesToUnderlyingFactor", t],
            queryFn: async () => {
              let e = t.filter((e) => {
                let { strategyAddress: t } = e;
                return t !== g.r_;
              });
              try {
                let n = await (0, c.A)(f.v, {
                  contracts: t
                    .filter((e) => {
                      let { strategyAddress: t } = e;
                      return t !== g.r_ && !u()(t);
                    })
                    .map((e) => {
                      let { strategyAddress: t } = e;
                      return {
                        address: t,
                        abi: _.lV,
                        functionName: "sharesToUnderlyingView",
                        args: [0xde0b6b3a7640000n],
                      };
                    }),
                  allowFailure: !1,
                }).then((t) =>
                  t.map((t, n) => ({
                    strategy: e[n].strategyAddress,
                    sharesToUnderlying: t,
                  }))
                );
                return (
                  t.some((e) => e.strategyAddress === g.r_) &&
                    n.push({
                      strategy: g.r_,
                      sharesToUnderlying: 0xde0b6b3a7640000n,
                    }),
                  n.length > 0 ? n : []
                );
              } catch (e) {
                return [];
              }
            },
            staleTime: 3e5,
            gcTime: 3e5,
          });
        },
        E = n(77809),
        m = n(29709),
        I = () => {
          let { address: e } = (0, s.Z)(),
            { data: t = [], isLoading: n } = E.h.token.getTokens.useQuery({
              include_native: !1,
            }),
            { data: l, isSuccess: d, isLoading: u, error: c } = (0, i.Z)(),
            {
              data: _,
              isSuccess: f,
              isLoading: g,
              error: I,
            } = h({ tokens: t }),
            {
              data: L,
              isLoading: N,
              isSuccess: T,
              error: p,
            } = (0, o.ZP)({ version: "v1" });
          return (0, r.useMemo)(() => {
            let r = [],
              s = n || g || N || (!!e && u),
              i = f && T && (!e || d),
              h = I || p || c;
            return (
              i &&
                (r = t.map((t) => {
                  var n;
                  let r = (0, o.wV)(t, L.tokenPrices, "v1");
                  return new m.W(t, {
                    icon: t.icon,
                    price: r.usd,
                    marketCap: r.usd_market_cap,
                    ethValue: r.eth,
                    sharesToUnderlyings: _,
                    userAddress: e,
                    tokenSharesStrats: l,
                    tokenTVL: (0, a.dL)(
                      null !== (n = t.tvl) && void 0 !== n ? n : 0
                    ),
                  });
                })),
              { data: r, isLoading: s, isSuccess: i, error: h }
            );
          }, [
            n,
            g,
            N,
            e,
            u,
            f,
            T,
            d,
            I,
            p,
            c,
            t,
            null == L ? void 0 : L.tokenPrices,
            _,
            l,
          ]);
        };
    },
    37238: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(66427),
        a = n(27196),
        s = n(77809),
        i = n(45363),
        o = n(44001),
        l = n(2142),
        d = n(40589),
        u = n(29709),
        c = n(20177);
      let _ = d.stakeConfig.nativeToken;
      var f = () => {
        let { address: e } = (0, a.Z)(),
          t = (function () {
            let { address: e } = (0, a.Z)();
            return (0, o.u)({
              address: d.stakeConfig.eigenPodManagerAddress,
              abi: l.Y1,
              functionName: "podOwnerShares",
              args: e && [e],
              query: { enabled: !!e },
            });
          })();
        (0, i.c_)({ queryKey: t.queryKey });
        let {
            data: n,
            isLoading: f,
            isSuccess: g,
            error: h,
          } = (0, c.kc)({ version: "v0", address: "ethereum" }),
          {
            data: E,
            isLoading: m,
            isSuccess: I,
            error: L,
          } = s.h.native.globalPodSummary.useQuery(
            {},
            { staleTime: 12500, refetchOnWindowFocus: !1 }
          );
        return (0, r.useMemo)(() => {
          let r = null,
            a = f || m,
            s = g && I,
            i = h || L;
          if (s) {
            var o;
            r = new u.W(
              { ..._, slug: "ETH" },
              {
                icon: _.icon,
                price: n.usd,
                marketCap: n.usd_market_cap,
                sharesToUnderlyings: [
                  {
                    strategy: _.strategyAddress,
                    sharesToUnderlying: 0xde0b6b3a7640000n,
                  },
                ],
                userAddress: e,
                globalPodSummary: E.summary,
                podOwnerShares:
                  null !== (o = null == t ? void 0 : t.data) && void 0 !== o
                    ? o
                    : 0n,
              }
            );
          }
          return { data: r, isLoading: a, isSuccess: s, error: i };
        }, [
          f,
          m,
          g,
          I,
          h,
          L,
          null == n ? void 0 : n.usd,
          null == n ? void 0 : n.usd_market_cap,
          e,
          null == E ? void 0 : E.summary,
          null == t ? void 0 : t.data,
        ]);
      };
    },
    45363: function (e, t, n) {
      n.d(t, {
        c_: function () {
          return d;
        },
        lb: function () {
          return u;
        },
      });
      var r = n(66427),
        a = n(94188),
        s = n(45632),
        i = n(77809);
      let o = (e) => {
          let { onBlockNumber: t, blockFrequency: n = 1 } = e,
            { data: a } = (0, s.O)({ watch: !0 });
          (0, r.useEffect)(() => {
            a && a % BigInt(n) === BigInt(0) && t(a);
          }, [a, n]);
        },
        l = (e) => {
          let {
              onBlockNumber: t,
              blockFrequency: n = 1,
              subgraph: a,
              query: s,
            } = e,
            { data: o } = i.h.subgraph.getBlockHead.useQuery(
              { subgraph: a },
              { refetchInterval: 1e4, ...s }
            );
          (0, r.useEffect)(() => {
            o && o % BigInt(n) === BigInt(0) && t(o);
          }, [o]);
        },
        d = (e) => {
          let { queryKey: t, blockFrequency: n = 1 } = e,
            r = (0, a.NL)();
          o({
            onBlockNumber: () => {
              r.invalidateQueries({ queryKey: t });
            },
            blockFrequency: n,
          });
        },
        u = (e) => {
          let { queryKey: t, blockFrequency: n = 1, subgraph: r } = e,
            s = (0, a.NL)();
          l({
            onBlockNumber: () => {
              s.invalidateQueries({ queryKey: t });
            },
            blockFrequency: n,
            subgraph: r,
          });
        };
    },
    20177: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return s;
        },
        kc: function () {
          return i;
        },
        wV: function () {
          return a;
        },
      });
      var r = n(77809);
      let a = function (e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "v1";
        return "v0" === n && e.apiID && e.apiID in t
          ? t[e.apiID]
          : "v1" === n && e.address && e.address in t
          ? t[e.address]
          : "v1" === n && e.mainnetAddress && e.mainnetAddress in t
          ? t[e.mainnetAddress]
          : { usd: 0, eth: 0, usd_market_cap: 0, eth_market_cap: 0 };
      };
      function s(e) {
        let { version: t = "v1" } = e;
        return r.h.price.getPrices.useQuery(
          { version: t },
          { staleTime: 6e4, refetchOnWindowFocus: !1 }
        );
      }
      function i(e) {
        let { address: t, version: n = "v1" } = e;
        return r.h.price.getPrice.useQuery(
          { address: t, version: n },
          { enabled: !!t, staleTime: 6e4, refetchOnWindowFocus: !1 }
        );
      }
    },
    61842: function (e, t, n) {
      let r = (0, n(58911).Ue)((e, t) => {
        var n;
        return {
          connectedAddress: void 0,
          selectedProfile: null,
          impersonationAddress: void 0,
          isImpersonating: !!(null === (n = t()) || void 0 === n
            ? void 0
            : n.impersonationAddress),
          writeAccess: !1,
          setConnectedAddress: (t) => e({ connectedAddress: t }),
          setSelectedProfile: (t) => e({ selectedProfile: t }),
          setImpersonationAddress: (t) => e({ impersonationAddress: t }),
          setWriteAccess: (t) => e({ writeAccess: t }),
        };
      });
      t.Z = r;
    },
    64087: function (e, t, n) {
      n.d(t, {
        d: function () {
          return l;
        },
        r: function () {
          return o;
        },
      });
      var r = n(66427),
        a = n(42140),
        s = n(24348),
        i = n(37238);
      let o = () => {
          let { data: e, isLoading: t, isSuccess: n } = (0, s.Z)(),
            { data: a, isLoading: o, isSuccess: l } = (0, i.Z)(),
            d = (0, r.useMemo)(
              () =>
                t || o || !a
                  ? null
                  : e.reduce(
                      (e, t) => ((e[t.strategyAddress.toLowerCase()] = t), e),
                      {
                        [null == a ? void 0 : a.strategyAddress.toLowerCase()]:
                          a,
                      }
                    ),
              [e, a, t, o]
            );
          return {
            data: {
              liquidRestakingTokens: e,
              nativeRestakingToken: a,
              strategyTokenMap: d,
            },
            isLoading: t || o,
            isSuccess: n && l,
            isLiquidTokensLoading: t,
            isLiquidTokensSuccess: n,
            isNativeTokenLoading: o,
            isNativeTokenSuccess: l,
          };
        },
        l = (e) => {
          let { data: t, isLoading: n, isSuccess: o } = (0, i.Z)(),
            { data: l, isLoading: d, isSuccess: u } = (0, s.Z)();
          return (0, r.useMemo)(
            () =>
              "ETH" === e.toUpperCase()
                ? { data: t, isLoading: n, isSuccess: o }
                : {
                    data: l.find(
                      (t) =>
                        t.slug.toUpperCase() === e.toUpperCase() ||
                        (0, a.EU)(t.address, e)
                    ),
                    isLoading: d,
                    isSuccess: u,
                  },
            [e, l, d, u, t, n, o]
          );
        };
    },
    77809: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
        x: function () {
          return d;
        },
      });
      var r = n(68101),
        a = n(36210),
        s = n(15830);
      n(32608);
      let i = () => "";
      function o() {
        return {
          links: [
            (0, r.gb)({
              enabled: (e) =>
                "down" === e.direction && e.result instanceof Error,
            }),
            (0, r.u_)({
              condition: (e) => !0 === e.context.skipBatch,
              true: (0, r.ch)({
                url: "".concat("http://127.0.0.1:7200","/api/trpc"),
                transformer: s.ZP,
              }),
              false: (0, r.N8)({
                url: "".concat("http://127.0.0.1:7200","/api/trpc"),
                transformer: s.ZP,
              }),
            }),
          ],
        };
      }
      let l = (0, a.t)({ config: o, ssr: !1, transformer: s.ZP }),
        d = (0, r.BJ)(o());
    },
    31680: function (e, t, n) {
      n.d(t, {
        Cj: function () {
          return i;
        },
        ER: function () {
          return l;
        },
        NY: function () {
          return u;
        },
        i9: function () {
          return o;
        },
        j5: function () {
          return s;
        },
        r_: function () {
          return a;
        },
        vO: function () {
          return d;
        },
      });
      var r = n(32725);
      let a = "0x0000000000000000000000000000000000000000",
        s = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn,
        i = 0xde0b6b3a7640000n,
        o = 80,
        l = 60,
        d = {
          status: r.TransactionStatus.NotStarted,
          blockNumber: null,
          hash: null,
        },
        u =
          "https://docs.edgelayerAI.xyz/edgelayerAI/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/repointing-a-validators-withdrawal-credentials";
    },
    3993: function (e, t, n) {
      n.d(t, {
        An: function () {
          return h;
        },
        Ie: function () {
          return I;
        },
        Kl: function () {
          return m;
        },
        M1: function () {
          return g;
        },
        Z1: function () {
          return _;
        },
        af: function () {
          return c;
        },
        hD: function () {
          return f;
        },
      }),
        n(38745),
        n(89850),
        n(51750),
        n(7886);
      var r = n(80453),
        a = n(13403),
        s = n(6135),
        i = n(44526),
        o = n(2142),
        l = n(42140),
        d = n(32725),
        u = n(40589);
      async function c(e, t, n) {
        let i = (function (e) {
          let t = "\x19Ethereum Signed Message:\n".concat(e.length).concat(e);
          return (0, r.w)((0, a.O0)(t));
        })(t);
        if (!e || 42 !== e.length)
          return (
            console.log("Invalid address"), { pubKeyHex: e, messageHash: i }
          );
        try {
          let t = await (0, s.L)({ hash: i, signature: n }),
            o = (0, a.nr)(t);
          if (
            ((o = 65 === o.length ? o.slice(1) : o),
            "0x".concat((0, r.w)(o).slice(-40)).toLowerCase() !==
              e.toLowerCase())
          )
            return (
              console.log("Invalid signature"), { pubKeyHex: e, messageHash: i }
            );
          return { pubKeyHex: t, messageHash: i };
        } catch (t) {
          return (
            console.log("Error recovering public key:", t),
            { pubKeyHex: e, messageHash: i }
          );
        }
      }
      n(92355);
      let _ = (e) => "lst" === e.group || "native" === e.group,
        f = (e) => !!e && "object" == typeof e && "address" in e,
        g = (e) =>
          [
            ...u.stakeConfig.rewardsTokenList,
            ...u.stakeConfig.stakingTokenList,
          ].find((t) => (0, l.EU)(t.address, e)),
        h = (e) =>
          Array.isArray(e)
            ? e.map(h)
            : {
                ...e,
                status:
                  e.status === d.TransactionStatus.Failed
                    ? d.TransactionStatus.NotStarted
                    : e.status,
              },
        E = async (e) => {
          var t;
          let { txReceipt: n, address: r, eventName: a, abi: s } = e,
            o = [];
          return (
            (null == n ? void 0 : n.logs) &&
              (null == n ||
                null === (t = n.logs) ||
                void 0 === t ||
                t.forEach((e) => {
                  if ((0, l.EU)(e.address, r))
                    try {
                      let t = (0, i.F)({
                        abi: s,
                        data: e.data,
                        topics: e.topics,
                        eventName: a,
                      });
                      t.eventName === a && o.push(t);
                    } catch (e) {}
                })),
            o
          );
        },
        m = async (e) => {
          let t = [];
          return (
            t.push(
              ...(
                await E({
                  abi: o.oG,
                  address: u.stakeConfig.delegationManagerAddress,
                  eventName: "WithdrawalCompleted",
                  txReceipt: e,
                })
              ).map((e) => e.args.withdrawalRoot)
            ),
            t
          );
        },
        I = {
          max: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return BigInt(
              t.length < 2 ? t[0] : t.reduce((e, t) => (e > t ? e : t))
            );
          },
          min: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return BigInt(
              t.length < 2 ? t[0] : t.reduce((e, t) => (e < t ? e : t))
            );
          },
        };
    },
    92355: function (e, t, n) {
      n.d(t, {
        YW: function () {
          return X;
        },
        eL: function () {
          return k;
        },
        uP: function () {
          return R;
        },
        v8: function () {
          return w;
        },
        zd: function () {
          return O;
        },
      });
      var r = n(38778),
        a = n(26556),
        s = n.n(a),
        i = n(10713),
        o = n.n(i),
        l = n(7510),
        d = n.n(l),
        u = n(72214),
        c = n.n(u),
        _ = n(93085),
        f = n(2142),
        g = n(42140),
        h = n(32725),
        E = n(27196),
        m = n(26821),
        I = n(40589),
        L = n(77809),
        N = n(31680);
      let T = {
          address: I.stakeConfig.delegationManagerAddress,
          abi: f.oG,
          functionName: "minWithdrawalDelayBlocks",
        },
        p = { pendingWithdrawals: [], completeableWithdrawals: [] },
        A = {
          type: h.fk.SINGLE,
          pendingWithdrawals: [],
          pendingWithdrawalAmount: 0n,
          completableWithdrawals: [],
          completableWithdrawalAmount: 0n,
          nextCompletableWithdrawalBlock: 0n,
          completableRedelegation: [],
        },
        C = (e) => {
          let { defaultData: t, tokenList: n } = e;
          return c()(
            n,
            (e, n) => (
              (e[n.strategyAddress.toLowerCase()] = Object.assign(
                {},
                s()(null != t ? t : A)
              )),
              e
            ),
            {}
          );
        },
        v = (e) => {
          let {
              pendingWithdrawals: t,
              completeableWithdrawals: n,
              tokenList: r,
            } = e,
            a = C({ defaultData: A, tokenList: r }),
            s = (e) => {
              let t = "".concat(e, "WithdrawalAmount"),
                n = "".concat(e, "Withdrawals");
              return (e) => {
                let {
                  nonce: r,
                  startBlock: s,
                  shares: i,
                  strategies: l,
                  isUndelegationQueue: d,
                  ...u
                } = e;
                l.forEach((e, c) => {
                  if (!o()(a, e.toLowerCase())) {
                    console.error("".concat(e, " not whitelisted"));
                    return;
                  }
                  let _ = e.toLowerCase();
                  (a[_][t] += BigInt(i[c])),
                    a[_][n].push({
                      ...u,
                      isUndelegationQueue: null != d && d,
                      nonce: BigInt(r),
                      startBlock: Number(s),
                      shares: i.map(BigInt),
                      completableBlock: 0,
                      strategies: l,
                    });
                });
              };
            };
          return t.forEach(s("pending")), n.forEach(s("completable")), a;
        },
        y = async (e) => {
          let t = await (0, _.A)(m.v, {
            contracts: e.map((e) => ({
              address: I.stakeConfig.delegationManagerAddress,
              abi: f.oG,
              functionName: "getWithdrawalDelay",
              args: [[e.strategyAddress]],
            })),
          });
          return t
            ? t.map((t, n) => {
                let { result: r } = t;
                return {
                  strategy: e[n].strategyAddress,
                  withdrawalDelayBlocks: r,
                };
              })
            : [];
        },
        U = async (e) => {
          try {
            let t = await L.x.token.getTokens.query({ include_native: !0 }),
              n = L.x.native.podUncompletedWithdrawals
                .query({ podOwner: e })
                .catch(() => p)
                .then((e) => v({ ...e, tokenList: t })),
              r = (0, _.A)(m.v, { contracts: [T] }),
              a = y(t),
              [s, i, [{ result: l }]] = await Promise.all([n, a, r]);
            return t.reduce((e, t, n) => {
              var r;
              let a = s[t.strategyAddress.toLowerCase()],
                { withdrawalDelayBlocks: u } =
                  null !== (r = i[n]) && void 0 !== r
                    ? r
                    : {
                        withdrawalDelayBlocks: 0n,
                        strategy: t.strategyAddress,
                      },
                c = u && l ? BigInt(u > l ? u : l) : N.j5,
                _ = a.pendingWithdrawals.map((e) => ({
                  ...e,
                  completableBlock: e.startBlock + Number(c),
                })),
                f = a.completableWithdrawals.map((e) => ({
                  ...e,
                  completableBlock: e.startBlock + Number(c),
                })),
                g = o()(
                  d()(_, (e) => {
                    let { completableBlock: t } = e;
                    return BigInt(null != t ? t : 0n);
                  }),
                  "completableBlock",
                  0n
                );
              return (
                (e[t.address] = {
                  ...t,
                  ...a,
                  pendingWithdrawals: _,
                  completableWithdrawals: f,
                  nextCompletableWithdrawalBlock: g,
                  completableRedelegation: f,
                }),
                e
              );
            }, {});
          } catch (e) {
            return {};
          }
        },
        S = (e, t, n) => t[e]((e) => (0, g.EU)(n, e)),
        P = (e, t) => S("find", e, t),
        B = (e, t) => S("findIndex", e, t),
        b = (e, t) => {
          let {
              uncompletedWithdrawals: n,
              uncompletedWithdrawal: r,
              single: a,
              batches: s,
            } = t,
            {
              symbol: i,
              strategyAddress: o,
              nextCompletableWithdrawalBlock: l,
            } = n,
            { strategies: d, withdrawalRoot: u, shares: c } = r,
            _ = "".concat(e, "s");
          try {
            if (1 === d.length) {
              a[i][_].push(r), (a[i]["".concat(e, "Amount")] += BigInt(c[0]));
              return;
            }
            let t = d
                .map((e) =>
                  I.stakeConfig.stakingTokenList.find((t) =>
                    (0, g.EU)(t.strategyAddress, e)
                  )
                )
                .filter(Boolean)
                .sort((e, t) =>
                  e.symbol.toUpperCase() > t.symbol.toUpperCase() ? 1 : -1
                ),
              n = t.map((e) => e.symbol).join("-"),
              f = t.map((e) => P(d, e.strategyAddress)),
              E = f.map((e) => BigInt(c[B(d, e)]));
            s[n] ||
              (s[n] = {
                type: h.fk.MULTI,
                tokens: t,
                symbols: n,
                strategyAddresses: f,
                pendingWithdrawals: [],
                pendingWithdrawalAmounts: Array(t.length).fill(0n),
                completableWithdrawals: [],
                completableWithdrawalAmounts: Array(t.length).fill(0n),
                completableRedelegation: [],
                nextCompletableWithdrawalBlock: BigInt(l),
              });
            let m = B(f, o),
              L = s[n][_].find((e) => e.withdrawalRoot === u);
            (s[n]["".concat(e, "Amounts")][m] += E[m]), L || s[n][_].push(r);
          } catch (e) {
            console.error(e);
          }
        },
        R = async (e) => {
          let t = {},
            n = {};
          for (let r of Object.values(await U(e))) {
            let {
              symbol: e,
              strategyAddress: a,
              pendingWithdrawals: i,
              completableWithdrawals: o,
              ...l
            } = r;
            t[e] ||
              (t[e] = {
                ...s()(l),
                symbol: e,
                pendingWithdrawals: [],
                pendingWithdrawalAmount: 0n,
                completableWithdrawals: [],
                completableWithdrawalAmount: 0n,
                completableRedelegation: [],
                strategyAddress: a,
              });
            let d = (e) => (a) =>
              b(e, {
                uncompletedWithdrawals: r,
                uncompletedWithdrawal: a,
                single: t,
                batches: n,
              });
            i.forEach(d("pendingWithdrawal")),
              o.forEach(d("completableWithdrawal")),
              Object.values(n).forEach((e) => {
                e.completableRedelegation = [...e.completableWithdrawals];
              });
          }
          return { single: t, batches: n };
        },
        w = async (e, t, n) => {
          let r = (
              await L.x.token.getTokens.query({ include_native: !0 })
            ).find((e) => (0, g.EU)(e.strategyAddress, t)),
            a = { ...r, ...A, strategyAddress: t, block: BigInt(n) };
          if (!e) return a;
          try {
            let t = await U(e),
              a = o()(t, null == r ? void 0 : r.address.toLowerCase());
            if (a) return { ...a, block: BigInt(n) };
          } catch (e) {
            throw (console.log(e), e);
          }
          return a;
        },
        k = async (e) => {
          try {
            return await U(e);
          } catch (e) {
            console.log(e);
          }
          return {};
        },
        D = async (e) => {
          try {
            return {
              completableRedelegation: [
                ...(
                  await L.x.native.podUncompletedWithdrawals
                    .query({ podOwner: e })
                    .catch(() => p)
                ).completeableWithdrawals,
              ],
            };
          } catch (e) {
            return { completableRedelegation: [] };
          }
        },
        O = (e) => {
          let { address: t } = (0, E.Z)(),
            n = ["getAllRedelegationWithdrawals", t];
          return (0, r.a)({
            queryKey: n,
            queryFn: async () => (t ? D(t) : { completableRedelegation: [] }),
            ...e,
          });
        },
        X = (e) => ({
          staker: e.staker,
          delegatedTo: e.delegatedTo,
          withdrawer: e.withdrawer,
          nonce: e.nonce,
          startBlock: e.startBlock,
          strategies: e.strategies,
          shares: e.shares,
        });
    },
    2142: function (e, t, n) {
      n.d(t, {
        J_: function () {
          return r.zn;
        },
        Y1: function () {
          return r.o9;
        },
        fj: function () {
          return r.G0;
        },
        lV: function () {
          return r.R0;
        },
        oG: function () {
          return r.qJ;
        },
        qC: function () {
          return r.rs;
        },
      });
      var r = n(47744);
    },
    66093: function (e, t, n) {
      n.d(t, {
        NX: function () {
          return r.NX;
        },
        O9: function () {
          return r.O9;
        },
        q$: function () {
          return r.q$;
        },
        xI: function () {
          return r.xI;
        },
      });
      var r = n(5136);
    },
    32725: function (e, t, n) {
      n.d(t, {
        TransactionStatus: function () {
          return r.LN;
        },
        fk: function () {
          return r.fk;
        },
      });
      var r = n(48774);
    },
    42140: function (e, t, n) {
      n.d(t, {
        DG: function () {
          return r.DG;
        },
        EU: function () {
          return r.EU;
        },
        JT: function () {
          return r.JT;
        },
        P_: function () {
          return r.P_;
        },
        Xn: function () {
          return r.Xn;
        },
        cn: function () {
          return r.cn;
        },
        dL: function () {
          return r.dL;
        },
        fr: function () {
          return r.fr;
        },
        t1: function () {
          return r.t1;
        },
        x7: function () {
          return r.x7;
        },
      });
      var r = n(3152);
      n(48774);
    },
  },
]);
//# sourceMappingURL=8140-ad79adb7901e15ff.js.map
