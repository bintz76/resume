import styled from '@emotion/styled';
import { Button, Tooltip, useTheme } from '@nextui-org/react';
import { Icon } from 'core';

interface Props {
  text: string;
  githubLink: string | null;
  otherLink: string | null;
  iosLink: string | null;
  androidLink: string | null;
}

function TitleTooltip({ text, githubLink, otherLink, iosLink, androidLink }: Props) {
  return githubLink !== null || otherLink !== null || androidLink !== null || iosLink !== null ? (
    <Tooltip
      placement="topStart"
      content={
        <TooltipContent githubLink={githubLink} otherLink={otherLink} iosLink={iosLink} androidLink={androidLink} />
      }
    >
      <StyledButton auto light color="primary" animated={false}>
        <h3>{text}</h3>
      </StyledButton>
    </Tooltip>
  ) : (
    <h3>{text}</h3>
  );
}

export default TitleTooltip;

const StyledButton = styled(Button)`
  padding-left: 0;
  padding-right: 2px;
`;

interface TooltipProps {
  githubLink: string | null;
  otherLink: string | null;
  iosLink: string | null;
  androidLink: string | null;
}

function TooltipContent({ githubLink, otherLink, iosLink, androidLink }: TooltipProps) {
  const { theme } = useTheme();

  return (
    <Div>
      {githubLink && (
        <a href={githubLink} rel="noreferrer" target="_blank">
          <Button auto light icon={<Icon name="GithubLine" fill={theme.colors.accents6.value} />} />
        </a>
      )}
      {otherLink && (
        <a href={otherLink} rel="noreferrer" target="_blank">
          <Button auto light icon={<Icon name="Link" fill={theme.colors.accents6.value} />} />
        </a>
      )}
      {iosLink && (
        <a href={iosLink} rel="noreferrer" target="_blank">
          <Button auto light icon={<Icon name="IosIcon" fill={theme.colors.accents6.value} />} />
        </a>
      )}
      {androidLink && (
        <a href={androidLink} rel="noreferrer" target="_blank">
          <Button auto light icon={<Icon name="AndroidIcon" fill={theme.colors.accents6.value} />} />
        </a>
      )}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
`;
