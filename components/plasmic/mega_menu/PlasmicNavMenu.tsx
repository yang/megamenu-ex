// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xxLpVGLUUz3W9tP5obHKh2
// Component: dnv_bVJNIF
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_mega_menu.module.css"; // plasmic-import: xxLpVGLUUz3W9tP5obHKh2/projectcss
import * as sty from "./PlasmicNavMenu.module.css"; // plasmic-import: dnv_bVJNIF/css

export type PlasmicNavMenu__VariantMembers = {
  open: "open";
};

export type PlasmicNavMenu__VariantsArgs = {
  open?: SingleBooleanChoiceArg<"open">;
};

type VariantPropType = keyof PlasmicNavMenu__VariantsArgs;
export const PlasmicNavMenu__VariantProps = new Array<VariantPropType>("open");

export type PlasmicNavMenu__ArgsType = {
  menu?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNavMenu__ArgsType;
export const PlasmicNavMenu__ArgProps = new Array<ArgPropType>("menu");

export type PlasmicNavMenu__OverridesType = {
  root?: p.Flex<"div">;
  menuContainer?: p.Flex<"div">;
  menu?: p.Flex<"div">;
};

export interface DefaultNavMenuProps {
  menu?: React.ReactNode;
  open?: SingleBooleanChoiceArg<"open">;
  className?: string;
}

function PlasmicNavMenu__RenderFunc(props: {
  variants: PlasmicNavMenu__VariantsArgs;
  args: PlasmicNavMenu__ArgsType;
  overrides: PlasmicNavMenu__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__open]: hasVariant(variants, "open", "open")
      })}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        className={classNames(defaultcss.all, sty.box__kS4Aj, {
          [sty.box__open__kS4Aj6A3Mm]: hasVariant(variants, "open", "open")
        })}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__aJwXx
          )}
        >
          {"Features"}
        </div>
      </div>

      {(
        triggers.hover_root
          ? true
          : hasVariant(variants, "open", "open")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"menuContainer"}
          data-plasmic-override={overrides.menuContainer}
          className={classNames(defaultcss.all, sty.menuContainer, {
            [sty.menuContainer__open]: hasVariant(variants, "open", "open")
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"menu"}
            data-plasmic-override={overrides.menu}
            hasGap={true}
            className={classNames(defaultcss.all, sty.menu)}
          >
            <p.PlasmicSlot
              defaultContents={
                <React.Fragment>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__t4Xz8)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__hGBl
                      )}
                    >
                      {"Menu Item 1"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__w7T4
                      )}
                    >
                      {"Menu Item 2"}
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__xhMaC)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__yOnLe
                      )}
                    >
                      {"Menu Item 1"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__tAiRv
                      )}
                    >
                      {"Menu Item 2"}
                    </div>
                  </p.Stack>
                </React.Fragment>
              }
              value={args.menu}
            />
          </p.Stack>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menuContainer", "menu"],
  menuContainer: ["menuContainer", "menu"],
  menu: ["menu"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuContainer: "div";
  menu: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicNavMenu__VariantsArgs;
  args?: PlasmicNavMenu__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicNavMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicNavMenu__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavMenu__ArgProps,
      internalVariantPropNames: PlasmicNavMenu__VariantProps
    });

    return PlasmicNavMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavMenu";
  } else {
    func.displayName = `PlasmicNavMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicNavMenu = Object.assign(
  // Top-level PlasmicNavMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuContainer: makeNodeComponent("menuContainer"),
    menu: makeNodeComponent("menu"),

    // Metadata about props expected for PlasmicNavMenu
    internalVariantProps: PlasmicNavMenu__VariantProps,
    internalArgProps: PlasmicNavMenu__ArgProps
  }
);

export default PlasmicNavMenu;
/* prettier-ignore-end */
