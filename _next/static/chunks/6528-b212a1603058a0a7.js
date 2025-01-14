"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6528],
  {
    74451: function (e, s, r) {
      r.d(s, {
        N: function () {
          return t;
        },
      });
      var n = r(58911);
      let a = { status: r(32725).TransactionStatus.NotStarted, hash: null },
        t = (0, n.Ue)((e) => ({
          transaction: a,
          updateTransaction: (s) =>
            e((e) => ({ transaction: { ...e.transaction, ...s } })),
          resetTransaction: () => e({ transaction: a }),
        }));
    },
    64514: function (e, s, r) {
      r.d(s, {
        Z: function () {
          return y;
        },
      });
      var n = r(81438),
        a = r(66427),
        t = r(58722),
        l = r(47049),
        d = r(6764),
        i = r(42098),
        c = r(96587),
        o = r(3102),
        u = r(94795),
        h = r(13802),
        m = r(4766),
        x = r(53922),
        f = r(84465),
        w = r(20216),
        b = r(42140),
        j = r(58029),
        g = r(61842),
        N = r(26821);
      function p(e) {
        var s, r, t;
        let {
            headerTitle: l,
            isOpen: d,
            onClose: i,
            data: c,
            address: o,
            changeProfile: u,
          } = e,
          { claimAmountInEth: h } = (0, j.Z)(o),
          { selectedProfile: p } = (0, g.Z)(),
          [v, T] = (0, a.useState)({
            address:
              null !== (s = null == p ? void 0 : p.address) && void 0 !== s
                ? s
                : o,
            ethRewards:
              null !== (r = null == p ? void 0 : p.ethRewards) && void 0 !== r
                ? r
                : h,
          }),
          C = (0, a.useMemo)(
            () =>
              c.filter((e) => e.address !== (null == p ? void 0 : p.address)),
            [c, null == p ? void 0 : p.address]
          ),
          y = [o, ...c.map((e) => e.address)],
          { data: _ } = (0, m.$j)({ addresses: y, config: N.v }),
          E = y.reduce((e, s, r) => {
            var n;
            return (
              (e[s] =
                null !== (n = null == _ ? void 0 : _[r]) && void 0 !== n
                  ? n
                  : (0, b.Xn)(s)),
              e
            );
          }, {});
        function k(e) {
          let { address: s, ethRewardsInWei: r, className: a, isEarner: t } = e;
          return (0, n.jsxs)("div", {
            className: a,
            children: [
              (0, n.jsxs)(m._T, {
                intent: "TextM",
                className: "flex gap-2",
                children: [
                  (0, n.jsx)(m.o, { className: "h-5 w-5" }),
                  (0, n.jsx)("div", {
                    className: "max-w-[120px] overflow-hidden text-ellipsis",
                    children: s,
                  }),
                  (0, n.jsx)("div", {
                    className: "flex items-center rounded-lg px-1 ".concat(
                      t
                        ? "bg-blue-50 text-blue-400"
                        : "bg-[#11690B33] text-emerald-800"
                    ),
                    children: (0, n.jsx)(m._T, {
                      intent: "TextXS",
                      weight: "medium",
                      children: t ? "Claimable" : "Connected wallet",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(m._T, {
                intent: "TextM",
                className: "text-blue-400",
                children: [
                  (0, n.jsx)(m.e3, {
                    value: r,
                    className: "text-blue-800",
                    format: "tokenAmount",
                  }),
                  " ",
                  "ETH",
                ],
              }),
            ],
          });
        }
        return (0, n.jsx)(f.fC, {
          open: d,
          children: (0, n.jsxs)(f.h_, {
            children: [
              (0, n.jsx)(f.aV, {
                className:
                  "fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black-200",
                onClick: i,
              }),
              (0, n.jsxs)(f.VY, {
                className:
                  "fixed left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-lg bg-white outline-none sm:top-1/3 sm:mt-20 sm:h-[220px] sm:w-[480px]",
                children: [
                  (0, n.jsxs)("div", {
                    className: "p-4",
                    children: [
                      (0, n.jsxs)(f.Dx, {
                        className:
                          "flex w-full items-center justify-between py-2",
                        children: [
                          (0, n.jsx)(m._T, {
                            weight: "medium",
                            intent: "TextL",
                            children: l,
                          }),
                          (0, n.jsx)(x.Z, {
                            className:
                              "h-4 w-4 cursor-pointer text-blue-400 hover:text-blue-800 hover:transition-colors",
                            onClick: i,
                          }),
                        ],
                      }),
                      (0, n.jsx)(m._T, {
                        intent: "TextXS",
                        className: "text-blue-400",
                        children: "Profile",
                      }),
                      (0, n.jsxs)(m.$n, {
                        className:
                          "flex justify-start rounded-md border border-blue-100",
                        address: v.address,
                        ensName: E[v.address],
                        claimAmountInEth:
                          null !== (t = v.ethRewards) && void 0 !== t ? t : 0,
                        isEarner: v.address !== o,
                        showAddressType: !0,
                        contentClassName: "max-h-[200px] overflow-y-auto",
                        children: [
                          v.address !== o &&
                            (0, n.jsx)(m.hP, {
                              onClick: () => T({ address: o, ethRewards: h }),
                              children: (0, n.jsx)(k, {
                                className:
                                  "w-full flex-wrap justify-between p-1 hover:bg-blue-200 sm:flex sm:w-[420px]",
                                address: E[o],
                                ethRewardsInWei: h,
                                isEarner: !1,
                              }),
                            }),
                          C.map((e) => {
                            var s;
                            return (0, n.jsx)(
                              m.hP,
                              {
                                onClick: () => {
                                  var s;
                                  return T({
                                    address: e.address,
                                    ethRewards: Number(
                                      (0, w.d)(
                                        null !== (s = e.ethRewardsInWei) &&
                                          void 0 !== s
                                          ? s
                                          : 0n
                                      )
                                    ),
                                  });
                                },
                                children: (0, n.jsx)(k, {
                                  className:
                                    "flex-wrap justify-between p-1 hover:bg-blue-200 sm:flex sm:w-[420px]",
                                  address: E[e.address],
                                  ethRewardsInWei: BigInt(
                                    null !== (s = e.ethRewardsInWei) &&
                                      void 0 !== s
                                      ? s
                                      : 0n
                                  ),
                                  isEarner: !0,
                                }),
                              },
                              e.address
                            );
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "h-[1px] w-full bg-blue-100",
                  }),
                  (0, n.jsx)("div", {
                    className: "flex p-4",
                    children: (0, n.jsx)(m.xk, {
                      onClick: () => {
                        u(v), i();
                      },
                      className: "w-full uppercase",
                      children: "change profile",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      p.displayName = "SwitchProfileModal";
      var v = r(38778),
        T = r(43424);
      async function C(e) {
        let { claimer: s } = e,
          r = await fetch(
            "".concat(
              T.O.NEXT_PUBLIC_edgelayerAI_BACKEND_URI_V2,
              "/edgelayerAI.RewardsService/GetEarnersForClaimer"
            ),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ claimerAddress: s }),
            }
          );
        return await r.json();
      }
      var y = function (e) {
        let {
            intent: s = "secondary",
            disconnectedClassName: r,
            connectedClassName: x,
          } = e,
          { open: f } = (0, m.k_)(),
          { isConnected: w } = (0, o.m)(),
          [j, N] = (0, a.useState)(!1),
          y = () => {
            setTimeout(() => {
              N((e) => !e);
            }, 0);
          },
          _ = (0, g.Z)((e) => e.connectedAddress),
          {
            data: E,
            isSuccess: k,
            isLoading: R,
          } = (0, v.a)({
            queryKey: ["claimer", _],
            queryFn: async () => {
              if (!_) return [];
              let { earners: e } = await C({ claimer: _ });
              return 1 === e.length && (0, b.EU)(e[0].address, _)
                ? []
                : e.map((e) => {
                    var s;
                    return {
                      address: e.address,
                      ethRewardsInWei: BigInt(
                        null !== (s = e.ethRewardsInWei) && void 0 !== s
                          ? s
                          : 0n
                      ),
                    };
                  });
            },
            enabled: !!_,
          }),
          { disconnect: P } = (0, u.q)(),
          I = (0, g.Z)((e) => e.setSelectedProfile),
          Z = (0, g.Z)((e) => e.selectedProfile),
          { data: S } = (0, h.F)({
            address: null == Z ? void 0 : Z.address,
            query: { enabled: "17000" !== T.O.NEXT_PUBLIC_CHAIN_ID },
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            j &&
              (0, n.jsx)(p, {
                isOpen: j,
                onClose: y,
                headerTitle: "Switch profile",
                data: null != E ? E : [],
                address: _,
                changeProfile: I,
              }),
            (0, n.jsx)(m.RZ, {
              open: f,
              isConnected: w,
              address: null == Z ? void 0 : Z.address,
              ensName: S,
              isEarner: (null == Z ? void 0 : Z.address) !== _,
              intent: s,
              disconnectedClassName: r,
              connectedClassName: x,
              children: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(m._2, {
                    href: ""
                      .concat(T.O.NEXT_PUBLIC_BLOCK_EXPLORER_URL, "/address/")
                      .concat(_),
                    label: "View on explorer",
                    icon: (0, n.jsx)(m.PQ, { className: "h-4 w-4" }),
                  }),
                  w &&
                    R &&
                    (0, n.jsx)(m.hP, {
                      children: (0, n.jsx)("div", {
                        className: "flex w-full items-center",
                        children: (0, n.jsx)(m.yg, {
                          intent: "TextM",
                          className: "w-full",
                        }),
                      }),
                    }),
                  w &&
                    k &&
                    E.length > 0 &&
                    (0, n.jsxs)(m.hP, {
                      onClick: y,
                      children: [
                        (0, n.jsx)("div", {
                          className: "rounded-full bg-blue-50 p-2",
                          children: (0, n.jsx)(m.VT, { className: "h-4 w-4" }),
                        }),
                        (0, n.jsx)(m._T, {
                          intent: "TextM",
                          weight: "medium",
                          children: "Switch profile",
                        }),
                      ],
                    }),
                  (0, n.jsxs)(m.hP, {
                    onClick: () => P(),
                    children: [
                      (0, n.jsx)("div", {
                        className: "rounded-full bg-blue-50 p-2",
                        children: (0, n.jsx)(t.Z, { className: "h-4 w-4" }),
                      }),
                      (0, n.jsx)(m._T, {
                        intent: "TextM",
                        weight: "medium",
                        children: "Disconnect",
                      }),
                    ],
                  }),
                  (0, n.jsx)(c.Z0, { className: "m-1 h-[1px] bg-blue-400" }),
                ],
              }),
            }),
          ],
        });
      };
    },
    58029: function (e, s, r) {
      var n = r(66427),
        a = r(20216),
        t = r(32725),
        l = r(74451),
        d = r(77809),
        i = r(38648),
        c = r(20177);
      s.Z = (e) => {
        let s = (0, l.N)((e) => e.transaction),
          r = d.h.rewards.getClaimableRewards.useQuery(
            { earner: e || "" },
            {
              enabled: !!e,
              trpc: { context: { skipBatch: !0 } },
              staleTime: 1 / 0,
              gcTime: 6e5,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              refetchOnMount: !1,
            }
          ),
          o = r.data,
          u = (0, n.useMemo)(
            () =>
              (null == o ? void 0 : o.rewards) ? (0, i._f)(o.rewards) : [],
            [null == o ? void 0 : o.rewards]
          ),
          h = u.find((e) => "EIGEN" === e.symbol),
          { data: m, isLoading: x } = (0, c.ZP)({ version: "v1" }),
          f = (0, n.useMemo)(
            () =>
              0 !== u.length && (null == m ? void 0 : m.tokenPrices)
                ? u.reduce(
                    (e, s) =>
                      e +
                      Number((0, a.d)(s.weiAmount)) *
                        (0, c.wV)(s, m.tokenPrices, "v1").eth,
                    0
                  )
                : 0,
            [u, m]
          );
        return (
          (0, n.useEffect)(() => {
            s.status === t.TransactionStatus.Success && r.refetch();
          }, [r, s.status]),
          {
            rewardsResponse: r,
            tokenClaims: u,
            eigenReward: h,
            claimAmountInEth: f,
            isLoading: r.isLoading || x,
          }
        );
      };
    },
    25899: function (e, s, r) {
      r.d(s, {
        H: function () {
          return d;
        },
        Ow: function () {
          return t;
        },
      });
      var n = r(39407),
        a = r(95239);
      let t = {
          rETH: {
            borderColor: "rgb(248,202,116)",
            backgroundColor: "rgb(238,118,83)",
          },
          ETH: {
            borderColor: "rgb(243,169,254)",
            backgroundColor: "rgb(157,111,174)",
          },
          stETH: {
            borderColor: "rgb(55,154,250)",
            backgroundColor: "rgb(135,194,252)",
          },
          cbETH: {
            borderColor: "rgb(0,83,248)",
            backgroundColor: "rgb(94,144,250)",
          },
        },
        l = (e) => {
          let s = (0, n.Z)(e, new Date());
          return s < 60
            ? "".concat(s, "m")
            : s < 1440
            ? "".concat(Math.floor(s / 60), "h ").concat(s % 60, "m")
            : ""
                .concat(Math.floor(s / 1440), "d ")
                .concat(Math.floor((s % 1440) / 60), "h");
        },
        d = (e, s, r) => {
          let n = Number(s) - Number(e);
          try {
            let e = new Date(Date.now() + 12e3 * n);
            if ("date" === r) return e;
            if ("compact" === r) return l(e);
            return (0, a.Z)(e);
          } catch (e) {
            return 0;
          }
        };
    },
  },
]);
//# sourceMappingURL=6528-b212a1603058a0a7.js.map
