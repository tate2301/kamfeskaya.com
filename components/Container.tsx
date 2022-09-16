import { forwardRef } from 'react';
import clsx from 'clsx';

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: any,
  ref,
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div>{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: any,
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
});

export const Container = forwardRef(function Container(
  { children, ...props },
  ref,
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
